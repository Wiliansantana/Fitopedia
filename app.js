const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const puppeteer = require('puppeteer');
const app = express();


app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/api/v1/cotacao', async (req, res, next) => {


    const browser = await puppeteer.launch({ headless: true, 'args' : [
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ] });
    const page = await browser.newPage();


    const qualquerUrl = `https://www.melhorcambio.com/soja-hoje#:~:text=O%20custo%20da%20negocia%C3%A7%C3%A3o%20depende,20%20%C3%A0s%2013%3A05).`;
    await page.goto(qualquerUrl);


    const soja = await page.evaluate(() => {
        return document.querySelector('.text-verde').value;
    });

    const qualquerUrl1 = `https://www.melhorcambio.com/cafe-hoje#:~:text=O%20custo%20da%20negocia%C3%A7%C3%A3o%20depende,20%20%C3%A0s%2013%3A05).`;
    await page.goto(qualquerUrl1);


    const cafe = await page.evaluate(() => {
        return document.querySelector('.text-verde').value;
    });


    const qualquerUrl2 = `https://www.melhorcambio.com/milho-hoje#:~:text=O%20custo%20da%20negocia%C3%A7%C3%A3o%20depende,20%20%C3%A0s%2013%3A05).`;
    await page.goto(qualquerUrl2);


    const milho = await page.evaluate(() => {
        return document.querySelector('.text-verde').value;
    });



    await browser.close();



    // retorna os dados
    return res.send({ ok: true, milho, cafe, soja });
});


module.exports = app;