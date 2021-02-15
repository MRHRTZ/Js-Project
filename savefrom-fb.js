// const Browser = require('zombie')
const puppeteer = require('puppeteer')
const cheerio = require('cheerio')
const fs = require('fs');

( async () => {
     let dl = 'https://fb.watch/2M5ohUfRyF/'
     let url = 'https://id.savefrom.net/9-how-to-download-facebook-video.html'
     const browser = await puppeteer.launch({
          headless: false,
          executablePath: 'C://Program Files//Google//Chrome//Application//chrome.exe',
          defaultViewport: null
     })
     const page = await browser.newPage()
     await page.goto(url)
     await page.type('#sf_url', dl)
     await page.click('#sf_submit')
     await page.waitForSelector('a.link.link-download')
     const bodyHandle = await page.$('body');
     const html = await page.evaluate(body => body.innerHTML, bodyHandle);
     await bodyHandle.dispose();
     const $ = cheerio.load(html)
     const title = $('div.row.title').attr('title')
     const urls = $('#sf_result > div > div.result-box.video > div.info-box > div.link-box > div.def-btn-box > a').attr('href')
     x({
          title: title,
          url: urls
     })
     await browser.close()
})()

// const browser = new Browser
// let dl = 'https://fb.watch/2L-MvVtbXK/'
// let url = 'https://id.savefrom.net/9-how-to-download-facebook-video.html'
// browser.visit(url, function(){
//      browser.fill('sf_url', "https://fb.watch/2L-MvVtbXK/")
//      .pressButton('sf_submit')
//      const loader = browser.html()
//      fs.writeFileSync('./datachord.html', loader)
//      console.log(loader)
// })