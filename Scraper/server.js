const express = require('express');
const scraper = require('./scrape');

const app = express();
app.use(express.urlencoded({extended: true}));
const port = 3000;

const sites = {
    "https://www.mimovrste.com/" : {
        "računalništvo": "https://www.mimovrste.com/prenosniki",
    },
};

let products = [];

/*
Object.keys(sites).forEach((site) => {
    Object.keys(sites[site]).forEach(subSite => {
        let url = sites[site][subSite];

        scrape(url, site);
    });
});
*/

app.post("/scrape", (req, res) => {
  
    const parameters = req.body;
    console.log(parameters);

      const scraped = new Promise((resolve, reject) => {
        scraper
          .scrape("https://www.mimovrste.com/prenosniki")
          .then(data => {
            resolve(data)
          })
          .catch(err => reject('Mrš'))
      })
    
      Promise.all([scraped])
        .then(data => {
            let newData = data[0];
          res.end(JSON.stringify(newData, null, " "));
        })
        .catch(err => res.status(500).send(err))
})

app.listen(port, () => console.log("Listening on port 3000"));
