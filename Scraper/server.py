from flask import Flask, request, jsonify
from flask_cors import CORS
from bs4 import BeautifulSoup
import json
import concurrent.futures
import requests
import random
import time

app = Flask(__name__)
app.config["DEBUG"] = True
app.config['CORS_HEADERS'] = 'Content-Type'

MAX_THREADS = 100
#HEADERS = ({'User-Agent':'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36','Accept-Language': 'en-US, en;q=0.5'})
HEADERS = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0",
       "Accept-Encoding": "gzip, deflate", "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
       "DNT": "1", "Connection": "close", "Upgrade-Insecure-Requests": "1"}

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


def handle_hobbies_parameter(parameters, mapping_table):
    if not is_parameter_set(parameters, 'hobbies') or parameters["hobbies"] == set():
        return []

    urls = []

    for hoby in parameters["hobbies"]:
        if len(mapping_table['Hobbies'][hoby]) == 1:
            urls.extend(mapping_table['Hobbies'][hoby]['search'])
        elif len(mapping_table['Hobbies'][hoby]) < 3:
            if parameters['gender'] == 'Male':
                urls.extend(mapping_table['Hobbies'][hoby]['search-male'])
            elif parameters['gender'] == 'Female':
                urls.extend(mapping_table['Hobbies'][hoby]['search-female'])
            else:
                urls.extend(mapping_table['Hobbies'][hoby]['search-male'])
                urls.extend(mapping_table['Hobbies'][hoby]['search-female'])
        else:
            urls.extend(mapping_table['Hobbies'][hoby]['search'])
            if parameters['gender'] == 'Male':
                urls.extend(mapping_table['Hobbies'][hoby]['search-male'])
            elif parameters['gender'] == 'Female':
                urls.extend(mapping_table['Hobbies'][hoby]['search-female'])
            else:
                urls.extend(mapping_table['Hobbies'][hoby]['search-male'])
                urls.extend(mapping_table['Hobbies'][hoby]['search-female'])
    

    return urls



def get_urls_to_scrape(mapping_table, parameters):
    urls_to_scrape = []
    urls_to_scrape.extend(handle_age_parameter(parameters, mapping_table))
    urls_to_scrape.extend(handle_occasion_parameter(parameters, mapping_table))
    urls_to_scrape.extend(handle_hobbies_parameter(parameters, mapping_table))

    return urls_to_scrape 


def scrape_amazon(urls_to_scrape, price_range, trending=False):
    threads = min(MAX_THREADS, len(urls_to_scrape))

    if threads < 1:
        threads = 1
    scraped_products = []
    
    with concurrent.futures.ThreadPoolExecutor(max_workers=threads) as executor:
        if not trending:
            futs = [executor.submit(page_scrape, url, price_range) for url in urls_to_scrape]
        else:
            futs = [executor.submit(page_scrape_trending, url) for url in urls_to_scrape]

        for fut in concurrent.futures.as_completed(futs):
            scraped_products.extend(fut.result())

    return scraped_products


def page_scrape_trending(url):
    print(url)
    page = requests.get(url, headers=HEADERS)
    soup = BeautifulSoup(page.content, 'html.parser')
    products = []

    items = soup.find_all("div", attrs={'class':'zg-item-immersion'})

    for item in items:
        if item.find('div', class_='p13n-sc-truncated') is None or item.find('a', class_='a-link-normal') is None \
            or item.find('div', class_='a-section').find('img').get('src') is None or item.find('span', class_='p13n-sc-price') is None:
            continue
             
        price = item.find('span', class_='p13n-sc-price').string.strip()
        price = price.replace(",", ".")
        price = price.replace(".", "", price.count(".") -1)

        product = dict()       
        product['name'] = item.find('div', class_='p13n-sc-truncated').string.strip()
        product['link'] = 'https://www.amazon.de' + item.find('a', class_='a-link-normal').get('href')
        product['imageLink'] = item.find('div', class_='a-section').find('img').get('src').split(' ')[0]
        product['price'] = price
        
        products.append(product)

    return products
        


def page_scrape(url, price_range):
    print(url)
    page = requests.get(url, headers=HEADERS)
    soup = BeautifulSoup(page.content, 'html.parser')
    products = []

    items = soup.find_all("div", attrs={'class':'s-result-item'})

    for item in items:
        if item.find('span', class_='a-text-normal') is None or item.find('a', class_='a-text-normal') is None \
            or item.find('img', class_='s-image').get('srcset') is None or item.find('span', class_='a-price-whole') is None:
            continue
        
        price = item.find('span', class_='a-price-whole').string.strip()
        price = price.replace(",", ".")
        price = price.replace(".", "", price.count(".") -1)

        if price_range[0] != None and float(price) < float(price_range[0]) or float(price) > float(price_range[1]):
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
    print(parameters)

    urls_to_scrape = get_urls_to_scrape(read_mapping_table(), parameters)
    products = scrape_amazon(urls_to_scrape, (parameters['priceFrom'], parameters['priceTo']))
    random.shuffle(products)
    print("Products scraped:", len(products))

    return jsonify(products)


@app.route('/scrapeTrending', methods=['POST'])
def scrapeTrending():
    mapping_table = read_mapping_table()
    urls_to_scrape = mapping_table['Trending']['search']
    print(urls_to_scrape)
    products = scrape_amazon(urls_to_scrape, None, True)
    random.shuffle(products)

    return jsonify(products)


@app.route('/test', methods=['GET'])
def test():
    return jsonify('Sjeos frend')