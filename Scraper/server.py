from flask import Flask, request, jsonify
from flask_cors import CORS
from bs4 import BeautifulSoup
import json
import concurrent.futures
import requests
from requests_html import HTMLSession
import random

app = Flask(__name__)
app.config["DEBUG"] = True
app.config['CORS_HEADERS'] = 'Content-Type'

MAX_THREADS = 30
HEADERS = ({'User-Agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36',
            'Accept-Language': 'en-US, en;q=0.5'})

def remove_duplicate_hobbies(parameters):
    if not is_parameter_set(parameters, 'hobbies'):
        return parameters

    hobbies_set = set()
    for hobby in parameters['hobbies']:
        hobbies_set.add(hobby)
        
    parameters['hobbies'] = hobbies_set

    return parameters


def read_mapping_table():
    json_file = open("mappingTable.json")
    return json.loads(json_file.read()) 


def is_parameter_set(parameters, parameter):
    return parameter in parameters


def handle_age_parameter(parameters, mapping_table):
    if not is_parameter_set(parameters, 'ageFrom') or not is_parameter_set(parameters, 'ageTo'):
        return []

    urls = []

    if parameters['ageFrom'] > 1 and parameters['ageTo'] <= 10:    #Child
        urls.extend(mapping_table['Age']['child']['search'])
        if not is_parameter_set(parameters, 'gender') or parameters['gender'] == 'None' or parameters['gender'] == 'Other':
            urls.extend(mapping_table['Age']['child']['search-male'])
            urls.extend(mapping_table['age']['child']['search-female'])
        elif parameters['gender'] == 'Female':
            urls.extend(mapping_table['Age']['child']['search-female'])
        else:
            urls.extend(mapping_table['Age']['child']['search-male'])
    elif parameters['ageFrom'] > 10 and parameters['ageTo'] <= 18:  #Teen
        if not is_parameter_set(parameters, 'gender') or parameters['gender'] == 'None' or parameters['gender'] == 'Other':
            urls.extend(mapping_table['Age']['teen']['search-male'])
            urls.extend(mapping_table['Age']['teen']['search-female'])
        elif parameters['gender'] == 'Female':
            urls.extend(mapping_table['Age']['teen']['search-female'])
        else:
            urls.extend(mapping_table['Age']['teen']['search-male'])
    elif parameters['ageFrom'] == 0 and parameters['ageTo'] == 1:    #Infant
        urls.extend(mapping_table['Age']['infant']['search'])
    
    return urls


def handle_occasion_parameter(parameters, mapping_table):
    if not is_parameter_set(parameters, 'occasion') or parameters["occasion"] == 'None':
        return []

    urls = []

    if len(mapping_table['Occasion'][parameters['occasion']]) == 1:
        urls.extend(mapping_table['Occasion'][parameters['occasion']]['search'])
    elif len(mapping_table['Occasion'][parameters['occasion']]) < 3:
        if parameters['gender'] == 'Male':
            urls.extend(mapping_table['Occasion'][parameters['occasion']]['search-male'])
        elif parameters['gender'] == 'Female':
            urls.extend(mapping_table['Occasion'][parameters['occasion']]['search-female'])
        else:
            urls.extend(mapping_table['Occasion'][parameters['occasion']]['search-male'])
            urls.extend(mapping_table['Occasion'][parameters['occasion']]['search-female'])
    else:
        urls.extend(mapping_table['Occasion'][parameters['occasion']]['search'])
        if parameters['gender'] == 'Male':
            urls.extend(mapping_table['Occasion'][parameters['occasion']]['search-male'])
        elif parameters['gender'] == 'Female':
            urls.extend(mapping_table['Occasion'][parameters['occasion']]['search-female'])
        else:
            urls.extend(mapping_table['Occasion'][parameters['occasion']]['search-male'])
            urls.extend(mapping_table['Occasion'][parameters['occasion']]['search-female'])
    
    return urls


def get_urls_to_scrape(mapping_table, parameters):
    urls_to_scrape = []
    urls_to_scrape.extend(handle_age_parameter(parameters, mapping_table))
    urls_to_scrape.extend(handle_occasion_parameter(parameters, mapping_table))

    return urls_to_scrape 


def scrape_amazon(urls_to_scrape, price_range):
    threads = min(MAX_THREADS, len(urls_to_scrape))
    scraped_products = []
    
    with concurrent.futures.ThreadPoolExecutor(max_workers=threads) as executor:
        futs = [executor.submit(page_scrape, url, price_range) for url in urls_to_scrape]

        for fut in concurrent.futures.as_completed(futs):
            scraped_products.extend(fut.result())

    return scraped_products


def page_scrape(url, price_range):
    print(url)
    page = requests.get(url, headers=HEADERS)
    soup = BeautifulSoup(page.content, 'html.parser')
    products = []

    items = soup.find_all("div", attrs={'class':'s-result-item'})

    for item in items:
        if item.find('span', class_='a-text-normal') is None or item.find('a', class_='a-text-normal') is None \
            or item.find('img', class_='s-image') is None or item.find('span', class_='a-price-whole') is None:
            continue
        
        price = item.find('span', class_='a-price-whole').string.strip()

        if float(price.replace(",", ".")) < float(price_range[0]) or float(price.replace(",", ".")) > float(price_range[1]):
            continue

        product = dict()       
        product['name'] = item.find('span', class_='a-text-normal').string.strip()
        product['link'] = 'https://www.amazon.de' + item.find('a', class_='a-text-normal').get('href')
        product['imageLink'] = item.find('img', class_='s-image').get('srcset').split(' ')[0]
        product['price'] = price
        
        products.append(product)

    return products


@app.route('/scrape', methods=['POST'])
def scrape():
    parameters = remove_duplicate_hobbies(request.get_json())
    print("data is " + format(parameters))

    urls_to_scrape = get_urls_to_scrape(read_mapping_table(), parameters)
    products = scrape_amazon(urls_to_scrape, (parameters['priceFrom'], parameters['priceTo']))
    
    print("Scraped", len(products), "products")
    return jsonify(products)


app.run(host='192.168.0.186')