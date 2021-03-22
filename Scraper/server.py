from flask import Flask, request, jsonify
from flask_swagger_ui import get_swaggerui_blueprint
from flask_cors import CORS
from bs4 import BeautifulSoup
import json
import concurrent.futures
import requests
import random
import time

SWAGGER_URL = '/swagger'
API_URL = '/static/swagger.json'
SWAGGERUI_BLUEPRINT = get_swaggerui_blueprint(
    SWAGGER_URL,
    API_URL,
    config={
        'app_name': "Amazon scraper"
    }
)

app = Flask(__name__)
app.config["DEBUG"] = True
app.config['CORS_HEADERS'] = 'Content-Type'
app.register_blueprint(SWAGGERUI_BLUEPRINT, url_prefix=SWAGGER_URL)

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
        
    parameters['hobbies'] = list(hobbies_set)

    return parameters


def read_mapping_table():
    json_file = open("mappingTable.json")
    return json.loads(json_file.read())


def is_parameter_set(parameters, parameter):
    return parameter in parameters

#Iz mapping table-a pridobi urlje vezane na startos
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

#Iz mapping table-a pridobi dog vezane na vnešen dogodek
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

#Iz mapping table-a pridobi urlje vezane na hobije
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

#Zažene toliko threadov kolikor je urljev (MAX 100) in vsak thread scrapea svoj url
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
        

#Beautifullsoup scraper koda za urlje kategorij, keywordov
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


@app.route('/getProductData', methods=['POST'])
def getProductData():
    data = request.get_json()
    print(data["url"])

    page = requests.get(data["url"], headers=HEADERS)
    soup = BeautifulSoup(page.content, 'html.parser')

    description_container = soup.find("div", id="featurebullets_feature_div")
    description_items = description_container.find_all("span", class_="a-list-item")
    
    description = ""

    for description_item in description_items:
        if(description_item.string):
            print(description_item.string.strip())
            description += description_item.string.strip() + "\n"


    ratings_container = soup.find("div", id="averageCustomerReviews_feature_div")
    rating = ratings_container.find("i", class_="a-icon-star")
    
    if(rating):
        rating = rating.get("class")[-1]
        rating = rating.split("-", 2)[-1]
        print(rating)


    data = {
        'description': description,
        'rating': rating
    }

    return json.dumps(data)




@app.route('/ping')
def ping():
    return json.dumps("OK")

app.run(host='192.168.0.140')