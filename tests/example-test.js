/*
 For test purposal,
 yarn add scrape-it
 node example.js
*/
const scrapeIt = require("scrape-it");

const data = {
    "university": "Dokuz Eylül Üniversitesi",
    "faculity": "",
    "home":"http://www.deu.edu.tr",
    "url": "http://www.eng.deu.edu.tr",
    "scrape": {
        "news": {
            "listItem": "div.vpi-wrap > div",
            "name": "announcement",
            "data": {
                "url": {
                    "selector": "div.item-title > a",
                    "attr": "href"
                },
                "title": "div.item-title",
                "publishedAt": "document.title"
            }
        }
    }
}

const baseURI = data.url;
const scrape = data.scrape;

scrapeIt(baseURI, scrape).then(page => {
  page = page.news.filter((piece) => {
    if (piece.url && piece.title) {
      if (!piece.url.includes(baseURI)) {
        piece.url = `${data.home}${piece.url}`;
        return piece;
      } else {
        return piece;
      }
    }
  });
  console.log(page);
});
