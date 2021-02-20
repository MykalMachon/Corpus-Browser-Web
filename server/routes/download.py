# this is a downloader for python
import requests
import json
import os
import shutil
import zipfile

CONVOKIT_SOURCE_URL = "https://zissou.infosci.cornell.edu/convokit/datasets/download_config.json"


def download_corpus(corpus_name):
    # download the index file and parse it as json
    req = requests.get(CONVOKIT_SOURCE_URL, allow_redirects=True)

    # find the corpus by corpus_name and get it's download link
    source_json = json.loads(req.content)
    corpus_source_url = source_json['DatasetURLs'][f"{corpus_name}"]

    # download it into a temp folder
    corpus_zip = requests.get(corpus_source_url, allow_redirects=True)
    temp_folder, del_temp_folder = create_temp_folder()
    temp_zip_path = f"{temp_folder}{corpus_name}.zip"
    open(temp_zip_path, "wb").write(corpus_zip.content)

    # extract it into the datasets folder and ensure integrity
    zip_archive = zipfile.ZipFile(temp_zip_path)
    os.makedirs(f"{os.getcwd()}/dataset/", exist_ok=True)
    zip_archive.extractall('dataset/')

    # remove the temp folder
    del_temp_folder()

    # TODO return a response


def create_temp_folder():
    # create a temp folder to store zips
    temp_folder_path = f"{os.getcwd()}/tmp"
    os.makedirs(temp_folder_path, exist_ok=True)

    def delete_temp_folder():
        shutil.rmtree(temp_folder_path, ignore_errors=True)

    return "tmp/", delete_temp_folder


download_corpus('gap-corpus')