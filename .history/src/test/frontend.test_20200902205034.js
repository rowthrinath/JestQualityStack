const timeout = process.env.SLOWMO ? 30000 : 10000;
 const puppeteer = require('puppeteer');
// const devices = require('puppeteer/DeviceDescriptors');
// const iPhonex = devices['iPhone X'];

beforeAll(async () => {
  await page.goto(URL, { waitUntil: "domcontentloaded" });
});

describe("test header and title of the page", () => {
  test(
    "Quality Stack",
    async () => {
      const title = await page.title();
      expect(title).toBe("Quality Stack");
    },
    timeout
  );
});

test("launch browser and visit website", async () => {
  await page.click('[href="/loginpage"]');
  await page.waitForSelector('#example', {visible: true,});
  await page.click(
    "#root > div > div.container > form > div > input:nth-child(2)"
  );
  await page.type(
    "#root > div > div.container > form > div > input:nth-child(2)",
    "Rowthrinath"
  );
  await page.type(
    "#root > div > div.container > form > div > input:nth-child(4)",
    "Password"
  );
  await page.click("#root > div > div.container > form > div > button");
  await page.setViewport({ width: 1920, height: 1080 });
  await page.screenshot({ path: "./src/test/screenshots/landingpage.jpg", fullpage: true, type: "jpeg" });
  await page.click("#root > div > div:nth-child(1) > header > nav > div.toolbar_toggle_button > button > div:nth-child(1)");
});

// test('Emulate Mobile Device And take screenshot', async browser => {
//     const page = await browser.newPage();
//     //We use here page.emulate so no more need to set the viewport separately
//     //await page.setViewport({ width: 1280, height: 800 })
//     await page.emulate(iPhonex);
//     await page.goto('https://www.chercher.tech');
//     await page.screenshot({ path: 'cherchertech-iphoneX.png'});
//     await browser.close();
// });
