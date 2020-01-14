const express = require('express');
const puppeteer = require('puppeteer');
const scrollPageToBottom = require('puppeteer-autoscroll-down');


const app = express();
app.use(express.urlencoded({extended: true}));
const port = 3000;

const sites = {
    "https://www.mimovrste.com/" : {
        "računalništvo": "https://www.mimovrste.com/prenosniki",
    },
};

let products = [];

'use strict';


scrape = (url, parentSite) => {
    (async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url);
        console.log(url);

        const scrollStep = 250;
        const scrollDelay = 200;
        await scrollPageToBottom(page, scrollStep, scrollDelay);

        let tmpArray = await page.evaluate((parentLink) => {
            let elements = document.querySelectorAll(".lst-item");
            let arr = [];
            
            elements.forEach(element => {
                let title = element.lastElementChild.lastElementChild.firstElementChild.firstElementChild.firstElementChild.textContent;
                let link = element.lastElementChild.lastElementChild.firstElementChild.firstElementChild.firstElementChild.getAttribute("href");
                let imageLink = element.lastElementChild.firstElementChild.firstElementChild.getAttribute("src");
                let price = element.lastElementChild.lastElementChild.children.item("1").children.item("1").textContent;

                let object = {
                    "title": title,
                    "link": parentLink + link,
                    "imageLink": imageLink,
                    "price": price
                };

                arr.push(object);
            })

            return arr;
        }, parentSite.slice(0, -1));

        tmpArray.forEach(object => products.push(object));
        
        await browser.close()
    })()
}


async function returnJSON(res){
    let start = new Promise(function(resolve, reject) {
        Object.keys(sites).forEach((site) => {
            Object.keys(sites[site]).forEach(subSite => {
                let url = sites[site][subSite];
    
                scrape(url, site);
            });
        });
    
        resolve(products);
    });

    let result = await start;
    console.log(result);

    
    res.end(JSON.stringify(result, null, " "));
}

app.post('/scrape', (req, res) => {
    const parameters = req.body;
    console.log(parameters);

    res.set({ 'content-type': 'application/json; charset=utf-8' });

    returnJSON(res);
});

app.listen(port, () => console.log("listening on port 3000"));