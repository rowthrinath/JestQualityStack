const puppeteer = require('puppeteer');
const {sumOfTwoNumbers, writeNameAndAge} = require('../../utils');

test('test the sum of two numbers' , () =>{
const sum = sumOfTwoNumbers(2, 3);
expect(sum).toBe(5);
});

test('test sting with name and age works', () => {
const wording =  writeNameAndAge('Jack', 39);
expect(wording).toBe("My name is Jack and I am 39 years old");
});


beforeAll(async () => {
    await page.goto(URL, {waitUntil: 'domcontentloaded'});
});

test ('launch browser and visit website', async () => {
    
    await page.goto('http://localhost:3000/');
    await page.click('#root > div > div:nth-child(1) > header > nav > div.toolbar_navigation-items > ul > li:nth-child(2) > a');
    await page.type('#root > div > div.container > form > div > input:nth-child(2)', "Rowthrinath");
    //await page.click('#root > div > div.container > form > div > input:nth-child(4)');
    await page.type('#root > div > div.container > form > div > input:nth-child(4)', "Password");
    await page.click('#root > div > div.container > form > div > button');
    await page.close();
    await browser.close();   
});

