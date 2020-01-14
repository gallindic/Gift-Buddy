const puppeteer = require('puppeteer');
const scrollPageToBottom = require('puppeteer-autoscroll-down');


const scrape = async (url) => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)

    const scrollStep = 250;
    const scrollDelay = 200;
    await scrollPageToBottom(page, scrollStep, scrollDelay);
  
    const scrapedData = await page.evaluate(() => {
        let elements = document.querySelectorAll(".lst-item");
        let arr = [];
        
        elements.forEach(element => {
            let title = element.lastElementChild.lastElementChild.firstElementChild.firstElementChild.firstElementChild.textContent;
            let link = element.lastElementChild.lastElementChild.firstElementChild.firstElementChild.firstElementChild.getAttribute("href");
            let imageLink = element.lastElementChild.firstElementChild.firstElementChild.getAttribute("src");
            let price = element.lastElementChild.lastElementChild.children.item("1").children.item("1").textContent;

            let object = {
                "title": title,
                "link": "neki/" + link,
                "imageLink": imageLink,
                "price": price
            };

            arr.push(object);
        })

        return arr;
    });
  
    await browser.close()

    return scrapedData;
}

module.exports.scrape = scrape




