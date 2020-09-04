const timeout = process.env.SLOWMO ? 30000 : 10000;

beforeAll(async () => {
    await page.goto('http://localhost:3000", {waitUntil: 'domcontentloaded'});
});

describe('test header and title of the page', () => {
    test('React App', async () => {
        const title = await page.title();
        expect(title).toBe('React App');        
    }, timeout);
});

test ('launch browser and visit website', async () => {        
    await page.click('#loginlink');    
    await page.type('#username', "Rowthrinath");
    //await page.click('#root > div > div.container > form > div > input:nth-child(4)');
    await page.type('#password', "Password");
    await page.click('#btnlogin');
    await page.waitForSelector('.success');
    await page.close();
    await browser.close();   
});