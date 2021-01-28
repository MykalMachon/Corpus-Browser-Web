from flask import Flask
import os

app = Flask(__name__)
# Local Modules
import dataset


@app.route('/')
def hello_world():
    return '<main><h1>Corpus-Browser-Web API</h1> <p>This is an API for the Corpus-Browser-Web project: <a ' \
           'href="https://github.com/MykalMachon/Corpus-Browser-Web">see here for more info</a></p></main> '


# get list of currently supported datasets
@app.route('/dataset/list', methods=['GET'])
def run_dataset_list():
    return dataset.list_datasets()


# Get metadata about a dataset and links to specific tables
@app.route('/dataset/<name>/', methods=['GET'])
def run_get_dataset(name):
    return dataset.get_dataset(name)


# Get a table in a specific dataset, return the JSON
@app.route('/dataset/<name>/<subset>', methods=['GET'])
def run_get_dataset_subset(name, subset):
    return dataset.get_dataset_subset(name, subset)


# re-fetch data from the source, and reformat it
@app.route('/dataset/<name>/refresh', methods=['GET'])
def run_refresh_dataset(name):
    return dataset.refresh_dataset(name)
