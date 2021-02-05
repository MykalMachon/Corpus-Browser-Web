import os
from ..utils.json import read_JSON


def list_datasets():
    dataset_path = f"{os.getcwd()}/dataset/"
    datasets_entries = os.listdir(dataset_path)
    datasets_dict = {
        'datasets': datasets_entries
    }
    return datasets_dict


def get_dataset(name):
    dataset_dict = {
        'conversations': f"/dataset/{name}/conversations",
        'corpus': f"/dataset/{name}/corpus",
        'speakers': f"/dataset/{name}/speakers",
        'index': f"/dataset/{name}/index",
        'utterances': f"/dataset/{name}/utterances",
    }
    return dataset_dict


def get_dataset_subset(name, subset, page_info):
    extension = '.jsonl' if subset == 'utterances' else '.json'
    complete_subset_data_list = read_JSON(f"{os.getcwd()}/dataset/{name}", f"{subset}{extension}")

    # TODO format this better- it doesn't work with all datasets right now
    page_num = page_info['pageNum'] - 1 if 'pageNum' in page_info else 0
    page_size = page_info['pageSize'] if 'pageSize' in page_info else 50
    start_index = page_num * page_size
    end_index = start_index + page_size

    paged_subset_data_list = complete_subset_data_list[start_index:end_index]
    paged_data_dict = {
        'data': paged_subset_data_list
    }

    return paged_data_dict


def refresh_dataset():
    # 
    url = ''
    return 'The dataset should now be refreshed'
