from django.shortcuts import render
from django.http import HttpResponse, Http404
import requests
import validators
from bs4 import BeautifulSoup

# Create your views here.
# Default view from /
def index(request):
    return render(request, 'index.html')

# View after scraping
def scrape(request):
    
    if 'urlInput' in request.GET:
        url_input = request.GET['urlInput']
        #Checks if url is valid
        if validators.url(url_input) == True:

            result = requests.get(url_input)
            doc = BeautifulSoup(result.text, 'html.parser')

            imgs_list = [] # Stores links to images for img src=''
            add_valid_url('img', 'src', imgs_list, doc)

            return render(request, 'index.html', {'imgs_list': imgs_list})

    # Otherwise, display not found image
    imgs_list = ['https://unbxd.com/wp-content/uploads/2014/02/No-results-found.jpg'] # Not found image
    return render(request, 'index.html', {'imgs_list': imgs_list})
        
# Adds valid urls to list
def add_valid_url(tag: str, attribute: str, collection, doc):
    tags_list = doc.find_all(str(tag))
    for tag in tags_list:
        value = tag.get(str(attribute))
        if validators.url(value) == True:
            collection.append(value)