from flask import Flask, request
from .routes import dataset
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/dataset/*": {"origins": "*"}})

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
    # this only returns the first 50 items
    # TODO allow users to send in their paging info with request.JSON() parsing
    return dataset.get_dataset_subset(name, subset, {'pageNum': 1, 'pageSize': 5})


# re-fetch data from the source, and reformat it
@app.route('/dataset/<name>/refresh', methods=['GET'])
def run_refresh_dataset(name):
    return dataset.refresh_dataset(name)
