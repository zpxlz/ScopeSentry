# -------------------------------------
# @file      : util.py
# @author    : Autumn
# @contact   : rainy-autumn@outlook.com
# @time      : 2024/10/26 22:48
# -------------------------------------------
import ipaddress
import re

from motor.motor_asyncio import AsyncIOMotorCursor

from core.db import get_mongo_db
from core.redis_handler import get_redis_pool
from loguru import logger


async def generate_ip_range(start_ip, end_ip):
    start = ipaddress.ip_address(start_ip)
    end = ipaddress.ip_address(end_ip)

    ip_list = []
    current_ip = start
    while current_ip <= end:
        ip_list.append(str(current_ip))
        current_ip += 1

    return ip_list


# 解析ip段
async def generate_target(target):
    try:
        if "http://" in target or "https://" in target:
            return [target]
        if '-' in target:
            start_ip, end_ip = target.split('-')
            l = await generate_ip_range(start_ip, end_ip)
            return l
        elif '/' in target:
            network = ipaddress.ip_network(target, strict=False)
            return [str(ip) for ip in network.hosts()]
        else:
            return [target]
    except Exception as e:
        return [target]


# 根据原始target生成目标列表
async def get_target_list(raw_target):
    target_list= []
    for t in raw_target.split("\n"):
        t.replace("http://", "").replace("https://", "")
        t = t.strip("\n").strip("\r").strip()
        result = await generate_target(t)
        target_list.extend(result)
    return target_list


async def task_progress():
    async for db in get_mongo_db():
        async for redis in get_redis_pool():
            query = {"progress": {"$ne": 100}}
            cursor: AsyncIOMotorCursor = db.task.find(query)
            result = await cursor.to_list(length=None)
            if len(result) == 0:
                return True
            for r in result:
                id = str(r["_id"])
                key = f"TaskInfo:tmp:{id}"
                exists = await redis.exists(key)
                if exists:
                    count = await redis.llen(key)
                    progress_tmp = round(count / r['taskNum'], 2)
                    progress_tmp = round(progress_tmp * 100, 1)
                    if progress_tmp > 100:
                        progress_tmp = 100
                    if progress_tmp == 100:
                        time_key = f"TaskInfo:time:{id}"
                        time_value = await redis.get(time_key)
                        await db.task.update_one({"_id": r["_id"]}, {"$set": {"endTime": time_value}})
                    await db.task.update_one({"_id": r["_id"]}, {"$set": {"progress": progress_tmp}})
                else:
                    await db.task.update_one({"_id": r["_id"]}, {"$set": {"progress": 0}})
            return


async def delete_asset(task_ids, is_project=False):
    async for db in get_mongo_db():
        key = ["asset", "subdomain", "SubdoaminTakerResult", "UrlScan", "crawler", "SensitiveResult", "DirScanResult",
               "vulnerability", "PageMonitoring"]
        del_query = {"taskName": {"$in": task_ids}}
        if is_project:
            del_query = {
                "$or": [
                    {"taskName": {"$in": task_ids}},
                    {"project": {"$in": task_ids}}
                ]
            }
        for k in key:
            result = await db[k].delete_many(del_query)
            if result.deleted_count > 0:
                logger.info("Deleted {} {} documents".format(k, result.deleted_count))
            else:
                logger.info("Deleted {} None documents".format(k))


async def parameter_parser(parameter, db):
    dict_list = {}
    port_list = {}
    # 获取字典
    cursor: AsyncIOMotorCursor = db["dictionary"].find({})
    result = await cursor.to_list(length=None)
    for doc in result:
        dict_list[f'{doc["category"].lower()}.{doc["name"].lower()}'] = str(doc['_id'])
    # 获取端口
    cursor: AsyncIOMotorCursor = db.PortDict.find({})
    result = await cursor.to_list(length=None)
    for doc in result:
        port_list[f'{doc["name"].lower()}'] = doc["value"]

    for module_name in parameter:
        for plugin in parameter[module_name]:
            matches = re.findall(r'\{(.*?)\}', parameter[module_name][plugin])
            for match in matches:
                tp, value = match.split(".", 1)
                if tp == "dict":
                    if value.lower() in dict_list:
                        real_param = dict_list[value.lower()]
                    else:
                        real_param = match
                        logger.error(f"parameter error:module {module_name} plugin {plugin}  parameter {parameter[module_name][plugin]}")
                    parameter[module_name][plugin] = parameter[module_name][plugin].replace("{" + match + "}", real_param)
                elif tp == "port":
                    if value.lower() in port_list:
                        real_param = port_list[value.lower()]
                    else:
                        real_param = match
                        logger.error(
                            f"parameter error:module {module_name} plugin {plugin}  parameter {parameter[module_name][plugin]}")
                    parameter[module_name][plugin] = parameter[module_name][plugin].replace("{" + match + "}", real_param)
    return parameter
