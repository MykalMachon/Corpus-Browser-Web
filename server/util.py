import json


def read_JSON(path, file_name):
    raw_content = open(f"{path}/{file_name}", "r").read()
    formatted_content = [json.loads(jline) for jline in raw_content.splitlines()]
    return formatted_content
