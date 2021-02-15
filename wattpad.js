const { default: Axios } = require('axios')
const cheerio = require('cheerio')

async function wattpadSearch(query) {
     return new Promise((resolve, reject) => {
          Axios.get('https://www.wattpad.com/search/' + query)
          .then(({ data }) => {
               const $ = cheerio.load(data)
               let title = []
               let url = []
               let id = []
               let img = []
               $('#results-stories > div > ul > li > div > a > div.cover.cover-xs.pull-left > img').get().map((rest) => {
                    title.push($(rest).attr('alt'))
                    img.push($(rest).attr('src'))
               })
               $('#results-stories > div > ul > li > div > a').get().map((rest) => {
                    url.push('https://www.wattpad.com' + $(rest).attr('href'))
                    id.push($(rest).attr('data-id'))
               })
               let results = []
               for (let i = 0; i < title.length; i++) {
                    const ress = {
                         id: id[i],
                         title: title[i],
                         thumb: img[i],
                         url: url[i],

                    }
                    results.push(ress)
               }
               resolve(results)
          }).catch(reject)
     })
}

async function dapatUrlBaca(urlStory){
     return new Promise((resolve, reject) => {
          Axios.get(urlStory, {
               headers: {
                    cookies: "wp_id=847b4df3-34da-4341-963a-0055ce115542; lang=20; fs__exp=1; locale=id_ID; ff=1; dpr=1; tz=-7; _gid=GA1.2.2021227156.1609366547; _fbp=fb.1.1609366546940.1628275046; __qca=P0-1418787791-1609366545836; G_ENABLED_IDPS=google; hc=1; uuid=07b600e3-bc29-4763-c4b7-b9500032a52a; __utma=122286349.1753646722.1609366545.1609367342.1609367342.1; __utmz=122286349.1609367342.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); __utmv=122286349.|1=logged=1=1^2=created=20190722=1^3=group=10=1; token=231023083%3A34c6abaa2c4a3adf6b51f497217671ac5036596a55bdf8aac9d4d63f882a5dfe; forceRefresh=1; isStaff=1; te_session_id=1609369147344; AMP_TOKEN=%24NOT_FOUND; signupFrom=story_reading; _ga=GA1.1.1753646722.1609366545; rt_token=5bc37f774d5defed9cedbc8f62c463f9c676f317caaf3382af770ce7c19f38e8; _ga_FNDTZ0MZDQ=GS1.1.1609366544.1.1.1609371182.0;"
               }
          }).then(({ data }) => {
               const $ = cheerio.load(data)
               resolve({ result: 'https://www.wattpad.com' + $('a.btn.btn-orange.btn-sm.btn-inline.on-story-navigate').attr('href') })
               resolve(data)
          })
     })
}

async function bacaWattpad(url) {
     return new Promise(async(resolve, reject) => {
          if (/story/g.test(url)) url = (await dapatUrlBaca(url)).result
          Axios.get(url, {
               headers: {
                    cookies: "wp_id=847b4df3-34da-4341-963a-0055ce115542; lang=20; fs__exp=1; locale=id_ID; ff=1; dpr=1; tz=-7; _gid=GA1.2.2021227156.1609366547; _fbp=fb.1.1609366546940.1628275046; __qca=P0-1418787791-1609366545836; G_ENABLED_IDPS=google; hc=1; uuid=07b600e3-bc29-4763-c4b7-b9500032a52a; __utma=122286349.1753646722.1609366545.1609367342.1609367342.1; __utmz=122286349.1609367342.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); __utmv=122286349.|1=logged=1=1^2=created=20190722=1^3=group=10=1; token=231023083%3A34c6abaa2c4a3adf6b51f497217671ac5036596a55bdf8aac9d4d63f882a5dfe; forceRefresh=1; isStaff=1; te_session_id=1609369147344; AMP_TOKEN=%24NOT_FOUND; signupFrom=story_reading; _ga=GA1.1.1753646722.1609366545; rt_token=5bc37f774d5defed9cedbc8f62c463f9c676f317caaf3382af770ce7c19f38e8; _ga_FNDTZ0MZDQ=GS1.1.1609366544.1.1.1609371182.0;"
               }
          })
               .then(({ data }) => {
                    const $ = cheerio.load(data)
                    const title = $('title').text()
                    const img = $('figure > p > img').get().map((rest) => {
                         if ($(rest).length) {
                              return $(rest).attr('src').replace('?s=fit&w=720&h=720', '')
                         }
                    })
                    const image = img ? img : img
                    const author = $('div > div > div > header > div.author.hidden-lg > a:nth-child(2)').text()
                    const author_page = 'https://www.wattpad.com' + $('div > div > div > header > div.author.hidden-lg > a').attr('href')
                    const isi = image.length > 0 ? $('pre').text().replace(/                          /g, '').split('Ups! Gambar ini tidak mengikuti Pedoman Konten kami. Untuk melanjutkan publikasi, hapuslah gambar ini atau unggah gambar lain.\n  \n\n\n')[1].replace(/            /g, '') : $('pre').text().replace(/                          /g, '').replace(/                    /g, '').replace(/            /g, '')
                    const url_selanjutnya = $('footer > div.container > div > div > div > a.on-navigate.next-part-link').get().map((rest) => {
                         if ($(rest).length) {
                              return $(rest).attr('href')
                         }
                    })
                    const next_page = url_selanjutnya.length > 0 ? url_selanjutnya : $('div.next-up-title').text().replace(/  /g, '')
                    const results = {
                         title: title.replace(' - Wattpad',''),
                         author: {
                              name: author,
                              user_page: author_page
                         },
                         image: image,
                         next_page_url: next_page,
                         read_body: isi
                    }
                    resolve(results)
               }).catch(reject)
     })
}


(async () => {
     // const rch = await wattpadSearch('saya')
     const rch = await bacaWattpad("https://www.wattpad.com/story/106928575-tere-liye-%E2%9C%94")
     // const rch = await dapatUrlBaca("https://www.wattpad.com/story/6602611-king's-wife")
     console.log(rch)
})()