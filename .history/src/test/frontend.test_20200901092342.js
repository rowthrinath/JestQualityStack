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