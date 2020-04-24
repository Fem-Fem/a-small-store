const puppeteer = require("puppeteer");

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto("http://localhost:3000/menu");

//   await browser.close();
// })();
async function Test() {
  const browser = await puppeteer.launch({
    headless: false,
    ignoreHTTPSErrors: true,
    args: ["--ignore-certificate-errors"],
  });
  const page = await browser.newPage();
  page.goto("https://localhost:3000");
}

Test();
