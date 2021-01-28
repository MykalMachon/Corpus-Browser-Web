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
    # datasetPath = f"{os.getcwd()}/dataset/{name}"
    dataset_dict = {
        'conversations': f"/dataset/{name}/conversations",
        'corpus': f"/dataset/{name}/corpus",
        'speakers': f"/dataset/{name}/speakers",
        'index': f"/dataset/{name}/index",
        'utterances': f"/dataset/{name}/utterances",
    }
    return dataset_dict


def get_dataset_subset(name, subset):
    extension = '.jsonl' if name == 'utterances' else '.json'
    print(f"{subset}{extension}")
    subset_dict = {
        'data': read_JSON(f"{os.getcwd()}/dataset/{name}", f"{subset}{extension}")
    }
    return subset_dict


def refresh_dataset():
    # 
    url = ''
    return 'The dataset should now be refreshed'
