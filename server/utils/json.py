import json
import simplejson


def read_JSON(path, file_name):
    raw_content = open(f"{path}/{file_name}", "r").read()
    formatted_content = [json.loads(jline) for jline in raw_content.splitlines()]
    ecma_json_string = simplejson.dumps(formatted_content, ignore_nan=True)
    ecma_json_content = [json.loads(jline) for jline in ecma_json_string.splitlines()][0]
    return ecma_json_content
