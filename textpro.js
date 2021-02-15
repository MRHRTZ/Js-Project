const cheerio = require('cheerio')
const puppeteer = require('puppeteer');

function imagetextmaker(styles, text1, textt2) {
  (async () => {

    try {

      const text = text1
      const text2 = textt2

      const select_style = styles

      let style = [
        "https://textpro.me/pornhub-style-logo-online-generator-free-977.html",
        "https://textpro.me/advanced-glow-text-effect-873.html",
        "https://textpro.me/create-logo-joker-online-934.html",
        "https://textpro.me/green-neon-text-effect-874.html",
        "https://textpro.me/create-3d-avengers-logo-online-974.html",
        "https://textpro.me/firework-sparkle-text-effect-930.html",
        "https://textpro.me/bokeh-text-effect-876.html",
        "https://textpro.me/sand-engraved-3d-text-effect-989.html",
        "https://textpro.me/1917-style-text-effect-online-980.html",
        "https://textpro.me/minion-text-effect-3d-online-978.html",
        "https://textpro.me/create-space-3d-text-effect-online-985.html",
        "https://textpro.me/horror-blood-text-effect-online-883.html"
      ]


      const browser = await puppeteer.launch({
        headless: true,
        executablePath: 'C://Program Files//Google//Chrome//Application//chrome.exe',
        defaultViewport: null
      });
      const page = await browser.newPage();

      if (select_style == '1') { //2
        await page.goto(style[0]);
        await page.type('#text-0', text);
        await page.type('#text-1', text2);
        await page.click('[name="submit"]')
        await page.waitForNavigation()
        const bodyHandle = await page.$('body');
        const html = await page.evaluate(body => body.innerHTML, bodyHandle);
        await bodyHandle.dispose();
        const $ = cheerio.load(html)
        const result = 'https://textpro.me' + $('#content-wrapper > section > div > div.col-md-9 > div:nth-child(4) > div > img').attr('src')
        await browser.close();
        return result
      } else if (select_style == '2') { //1
        await page.goto(style[1]);
        await page.type('#text-0', text);
        await page.click('[name="submit"]')
        await page.waitForNavigation()
        const bodyHandle = await page.$('body');
        const html = await page.evaluate(body => body.innerHTML, bodyHandle);
        await bodyHandle.dispose();
        const $ = cheerio.load(html)
        const result = 'https://textpro.me' + $('#content-wrapper > section > div > div.col-md-9 > div:nth-child(4) > div > img').attr('src')
        await browser.close();
        return result
      } else if (select_style == '3') { //1
        await page.goto(style[2]);
        await page.type('#text-0', text);
        await page.click('[name="submit"]')
        await page.waitForNavigation()
        const bodyHandle = await page.$('body');
        const html = await page.evaluate(body => body.innerHTML, bodyHandle);
        await bodyHandle.dispose();
        const $ = cheerio.load(html)
        const result = 'https://textpro.me' + $('#content-wrapper > section > div > div.col-md-9 > div:nth-child(4) > div > img').attr('src')
        await browser.close();
        return result
      } else if (select_style == '4') { //1
          await page.goto(style[5]);
        await page.type('#text-0', text);
        await page.click('[name="submit"]')
        await page.waitForNavigation()
        const bodyHandle = await page.$('body');
        const html = await page.evaluate(body => body.innerHTML, bodyHandle);
        await bodyHandle.dispose();
        const $ = cheerio.load(html)
        const result = 'https://textpro.me' + $('#content-wrapper > section > div > div.col-md-9 > div:nth-child(4) > div > img').attr('src')
        await browser.close();
        return result
      } else if (select_style == '5') { //2
        await page.goto(style[4]);
        await page.type('#text-0', text);
        await page.click('[name="submit"]')
        await page.waitForNavigation()
        const bodyHandle = await page.$('body');
        const html = await page.evaluate(body => body.innerHTML, bodyHandle);
        await bodyHandle.dispose();
        const $ = cheerio.load(html)
        const result = 'https://textpro.me' + $('#content-wrapper > section > div > div.col-md-9 > div:nth-child(4) > div > img').attr('src')
        await browser.close();
        return result
      } else if (select_style == '6') { //1
        await page.goto(style[5]);
        await page.type('#text-0', text);
        await page.click('[name="submit"]')
        await page.waitForNavigation()
        const bodyHandle = await page.$('body');
        const html = await page.evaluate(body => body.innerHTML, bodyHandle);
        await bodyHandle.dispose();
        const $ = cheerio.load(html)
        const result = 'https://textpro.me' + $('#content-wrapper > section > div > div.col-md-9 > div:nth-child(4) > div > img').attr('src')
        await browser.close();
        return result
      } else if (select_style == '7') { //1
        await page.goto(style[6]);
        await page.type('#text-0', text);
        await page.click('[name="submit"]')
        await page.waitForNavigation()
        const bodyHandle = await page.$('body');
        const html = await page.evaluate(body => body.innerHTML, bodyHandle);
        await bodyHandle.dispose();
        const $ = cheerio.load(html)
        const result = 'https://textpro.me' + $('#content-wrapper > section > div > div.col-md-9 > div:nth-child(4) > div > img').attr('src')
        await browser.close();
        return result
      } else if (select_style == '8') { //1
        await page.goto(style[7]);
        await page.type('#text-0', text);
        await page.click('[name="submit"]')
        await page.waitForNavigation()
        const bodyHandle = await page.$('body');
        const html = await page.evaluate(body => body.innerHTML, bodyHandle);
        await bodyHandle.dispose();
        const $ = cheerio.load(html)
        const result = 'https://textpro.me' + $('#content-wrapper > section > div > div.col-md-9 > div:nth-child(4) > div > img').attr('src')
        await browser.close();
        return result
      } else if (select_style == '9') { //1
        await page.goto(style[8]);
        await page.type('#text-0', text);
        await page.click('[name="submit"]')
        await page.waitForNavigation()
        const bodyHandle = await page.$('body');
        const html = await page.evaluate(body => body.innerHTML, bodyHandle);
        await bodyHandle.dispose();
        const $ = cheerio.load(html)
        const result = 'https://textpro.me' + $('#content-wrapper > section > div > div.col-md-9 > div:nth-child(4) > div > img').attr('src')
        await browser.close();
        return result
      } else if (select_style == '10') { //1
        await page.goto(style[9]);
        await page.type('#text-0', text);
        await page.click('[name="submit"]')
        await page.waitForNavigation()
        const bodyHandle = await page.$('body');
        const html = await page.evaluate(body => body.innerHTML, bodyHandle);
        await bodyHandle.dispose();
        const $ = cheerio.load(html)
        const result = 'https://textpro.me' + $('#content-wrapper > section > div > div.col-md-9 > div:nth-child(4) > div > img').attr('src')
        await browser.close();
        return result
      } else if (select_style == '11') { //2
        await page.goto(style[10]);
        await page.type('#text-0', text);
        await page.type('#text-1', text2);
        await page.click('[name="submit"]')
        await page.waitForNavigation()
        const bodyHandle = await page.$('body');
        const html = await page.evaluate(body => body.innerHTML, bodyHandle);
        await bodyHandle.dispose();
        const $ = cheerio.load(html)
        const result = 'https://textpro.me' + $('#content-wrapper > section > div > div.col-md-9 > div:nth-child(4) > div > img').attr('src')
        await browser.close();
        return result
      } else if (select_style == '12') { //1
        await page.goto(style[11]);
        await page.type('#text-0', text);
        await page.click('[name="submit"]')
        await page.waitForNavigation()
        const bodyHandle = await page.$('body');
        const html = await page.evaluate(body => body.innerHTML, bodyHandle);
        await bodyHandle.dispose();
        const $ = cheerio.load(html)
        const result = 'https://textpro.me' + $('#content-wrapper > section > div > div.col-md-9 > div:nth-child(4) > div > img').attr('src')
        await browser.close();
        return result
      }

    } catch (e) {
      const rejct = { status: 404, emror: e.message }
      return rejct
    }
  })();
}

console.log(imagetextmaker(1, 'cek', 'sound'))