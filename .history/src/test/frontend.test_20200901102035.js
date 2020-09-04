const timeout = process.env.SLOWMO ? 30000 : 10000;

beforeAll(async () => {
    await page.goto(URL, {waitUntil: 'domcontentloaded'});
});

describe('test header and title of the page', () => {
    test('React App', async () => {
        const title = await page.title();
        expect(title).toBe('React App');        
    }, timeout);
});

test ('launch browser and visit website', async () => {        
    await page.click('#root > div > div:nth-child(1) > header > nav > div.toolbar_navigation-items > ul > li:nth-child(2) > a');    
    await page.type('#root > div > div.container > form > div > input:nth-child(2)', "Rowthrinath");
    //await page.click('#root > div > div.container > form > div > input:nth-child(4)');
    await page.type('#password', "Password");
    await page.click('#btnlogin');
    await page.waitForSelector('.success');
    await page.close();
    await browser.close();   
});