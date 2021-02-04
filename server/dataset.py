import os
from util import read_JSON


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


def get_dataset_subset(name, subset, pageInfo):
    extension = '.jsonl' if subset == 'utterances' else '.json'
    complete_subset_data_list = read_JSON(f"{os.getcwd()}/dataset/{name}", f"{subset}{extension}")

    page_num = pageInfo['pageNum'] - 1 if 'pageNum' in pageInfo else 0
    page_size = pageInfo['pageSize'] if 'pageSize' in pageInfo else 50
    start_index = page_num * page_size
    end_index = start_index + page_size

    paged_subset_data_list = complete_subset_data_list[start_index:end_index]
    paged_data_dict = {
        'data': paged_subset_data_list
    }

    print(f"The length is as follows: ${len(paged_subset_data_list)}")

    return paged_data_dict


def refresh_dataset():
    # 
    url = ''
    return 'The dataset should now be refreshed'
