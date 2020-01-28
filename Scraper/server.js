const express = require('express');
const scraper = require('./scrape');

const app = express();
app.use(express.urlencoded({extended: true}));
const port = 3000;

app.post("/scrape", (req, res) => {
  
    const parameters = req.body;
    const budgetFrom = parameters.priceFrom;
    const budgetTo = parameters.priceTo;

    console.log(parameters);

      const scraped = new Promise((resolve, reject) => {
        scraper
          .scrape(budgetFrom, budgetTo)
          .then(data => {
            resolve(data)
          })
          .catch(err => reject('Error'))
      })
    
      Promise.all([scraped])
        .then(data => {
            let newData = data[0];
          res.end(JSON.stringify(newData, null, " "));
        })
        .catch(err => res.status(500).send(err))
})

app.listen(port, () => console.log("Listening on port 3000"));
