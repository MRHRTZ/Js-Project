const cheerio = require('cheerio')
const puppeteer = require('puppeteer');
 

(async () => {

try {

    const select_style = '1'

    let style = [
        "https://photofunia.com/categories/all_effects/neon-writing"
    ]


  const browser = await puppeteer.launch({
    headless: false,
    executablePath: 'C://Program Files//Google//Chrome//Application//chrome.exe',
    defaultViewport: null
  });
  const page = await browser.newPage();

  const text1 = 'Created by MRHRTZ'
  const text2 = 'Like This Tobz'
  if (select_style == '1') { //2
    await page.goto(style[0]);
    let textone = page.$('input[name=text]')
    await (await textone).click({ clickCount: 3 })
    await (await textone).press('Backspace');
    await (await textone).type(text1)
    await page.type('input[name="text2"]', text2);
    await page.click('#effect-form > div.send-button-container > button', { clickCount: 1 })
    await page.waitForNavigation()
    const bodyHandle = await page.$('body');
    const html = await page.evaluate(body => body.innerHTML, bodyHandle);
    await bodyHandle.dispose();
    const $ = cheerio.load(html)
    const result = $('#result-image').attr('src')
    console.log(result)
    await browser.close();
  } 

} catch (e){
  console.log(e)
}

})();
