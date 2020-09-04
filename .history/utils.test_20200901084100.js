const puppeteer = require('puppeteer');
const {sumOfTwoNumbers, writeNameAndAge} = require('./utils');

test('test the sum of two numbers' , () =>{
const sum = sumOfTwoNumbers(2, 3);
expect(sum).toBe(5);
});

test('test sting with name and age works', () => {
const wording =  writeNameAndAge('Jack', 39);
expect(wording).toBe("My name is Jack and I am 39 years old");
});

test ('launch browser and visit website', async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 80,
       // args: ['--window-size=1920,1080']
    });
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.click('#root > div > div:nth-child(1) > header > nav > div.toolbar_navigation-items > ul > li:nth-child(2) > a');
    await page.type('#root > div > div.container > form > div > input:nth-child(2)', "Rowthrinath");
    //await page.click('#root > div > div.container > form > div > input:nth-child(4)');
    await page.type('#root > div > div.container > form > div > input:nth-child(4)', "Password");
    await page.click('#root > div > div.container > form > div > button');
    page.close();
    browser.close   
});