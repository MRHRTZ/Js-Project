const cheerio = require('cheerio')
const { Cluster } = require("puppeteer-cluster");
(async () => {
  //Create cluster with 10 workers
  const cluster = await Cluster.launch({
    concurrency: Cluster.CONCURRENCY_CONTEXT,
    maxConcurrency: 10,
    puppeteerOptions: {
        headless: false,
    },
    monitor: false,
    timeout: 500000
  });

  // Print errors to console
  cluster.on("taskerror", (err, data) => {
    console.log(`Error crawling ${data}: ${err.message}`);
  });

  // Dumb sleep function to wait for page load
 

  await cluster.task(async ({ page, data: url, worker }) => {
    // const browser = await puppeteer.launch({ headless: false, slowMo: 50 });
    // const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle0' });
    
    let textone = page.$('input[name=text]')
    await (await textone).click({ clickCount: 3 })
    await (await textone).press('Backspace');
    await (await textone).type('Hi Myself!')
    // await page.type('input[name=text2]', 'Howawyah')
    await page.click('#effect-form > div.send-button-container > button', { clickCount: 1 })
    await page.waitForNavigation()
    const bodyHandle = await page.$('body');
    const html = await page.evaluate(body => body.innerHTML, bodyHandle);
    await bodyHandle.dispose();
    const $ = cheerio.load(html)
    const result = $('#result-image').attr('src')
    console.log(result)
})

//   for (let i = 1; i <= 10; i++) {
    cluster.queue("https://photofunia.com/categories/all_effects/beach-sign");
    cluster.queue("https://photofunia.com/categories/all_effects/neon-writing");
//   }
  await cluster.idle();
  await cluster.close();
})();