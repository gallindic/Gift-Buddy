const express = require('express');
const puppeteer = require('puppeteer');
const scrollPageToBottom = require('puppeteer-autoscroll-down');


const app = express();
app.use(express.urlencoded({extended: true}));
const port = 3000;

const sites = {
    "https://www.bigbang.si/" : {
        "računalništvo": "https://www.bigbang.si/racunalnistvo",
        "TV": "https://www.bigbang.si/slika",
        "Zvok": "https://www.bigbang.si/zvok",
    },
};

let returnProducts = [];
let id = 0;

scrape = (url) => {
    (async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
    
    await page.goto(url);

    const scrollStep = 250;
    const scrollDelay = 200;
    await scrollPageToBottom(page, scrollStep, scrollDelay);
  
    const scraper = await page.evaluate(() => {
          let products = document.querySelectorAll(".product-box");
          let productsArray = [];
          products.forEach((element, i) => {
              let childElements = element.children;
              let link = childElements.item("1").firstElementChild.getAttribute("href");
              let title = childElements.item("1").firstElementChild.textContent;
              let imageLink = childElements.item("0").firstElementChild.children.item("1").firstElementChild.getAttribute("src");
              let price = childElements.item("2").firstElementChild.firstElementChild.firstElementChild.textContent;
  
              let object = {
                  'title': title.replace(/\n/g,"").replace(/\s\s+/g, " ").trim(),
                  'link': link,
                  'imageLink': imageLink,
                  'price': price,
              };
  
              productsArray.push(object);
          });
          return productsArray;
    });
        scraper.forEach((object) => {
            returnProducts.push(object);
        });
    
        browser.close();
    })();
}

app.post('/', (req, res) => {
    const parameters = req.body;
    console.log(parameters);

    Object.keys(sites).forEach(site => {
        Object.keys(sites[site]).forEach(subsite => {
            let url = sites[site][subsite];
        
            scrape(url);
        });
    });

    res.end(JSON.stringify(returnProducts, null, " "));
});

app.listen(port, () => console.log("listening on port 3000"));