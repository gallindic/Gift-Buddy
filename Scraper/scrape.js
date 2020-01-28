const puppeteer = require('puppeteer');
const scrollPageToBottom = require('puppeteer-autoscroll-down');


let urls = ["https://www.mimovrste.com/zoge-za-nogomet", "https://www.mimovrste.com/zoge-za-kosarko", "https://www.mimovrste.com/televizorji", "https://www.mimovrste.com/prenosniki", "https://www.mimovrste.com/namizni-racunalniki"];

const scrape = async (from, to) => {
    let data = [];
        
    for(let i = 0; i < urls.length; i++){
        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        await page.goto(urls[i]);
        console.log("Scraping: " + urls[i]);
    
        const scrollStep = 250;
        const scrollDelay = 200;
        await scrollPageToBottom(page, scrollStep, scrollDelay);
        let limit = 0;
      
        let scrapedData = await page.evaluate((limitFactor, from, to) => {
            let elements = document.querySelectorAll(".lst-item");
            let arr = [];
            
            elements.forEach(element => {
                if(limitFactor < 10){
                    let title = element.lastElementChild.lastElementChild.firstElementChild.firstElementChild.firstElementChild.textContent;
                    let link = element.lastElementChild.lastElementChild.firstElementChild.firstElementChild.firstElementChild.getAttribute("href");
                    let imageLink = element.lastElementChild.firstElementChild.firstElementChild.getAttribute("src");
                    let price = element.lastElementChild.lastElementChild.children.item("1").children.item("1").textContent;
        
                    if(parseInt(price) <= to && parseInt(price) >= from){
                        let object = {
                            "title": title,
                            "link": "https://www.mimovrste.com" + link,
                            "imageLink": imageLink,
                            "price": price
                        };
            
                        arr.push(object);
                        limitFactor += 1;
                    }
                     
                }
            })
    
            return arr;
        }, limit, from, to);
      
        for(let j = 0; j < scrapedData.length; j++)
            data.push(scrapedData[j]);

        await browser.close();
    }

    return data;
}

module.exports.scrape = scrape




