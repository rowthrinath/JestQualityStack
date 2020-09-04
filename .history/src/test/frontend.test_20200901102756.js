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
    await page.goto(URL, {waitUntil: 'domcontentloaded'});     
    await page.click('[href="/loginpage"]');         
    await page.type('#username', "Rowthrinath");    
    await page.type('#root > div > div.container > form > div > input:nth-child(4)', "Password");
    await page.click('#root > div > div.container > form > div > button');
    await page.waitForSelector('.success');
    await page.close();
    await browser.close();   
});