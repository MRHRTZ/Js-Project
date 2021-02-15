const { default: Axios } = require('axios')
const cheerio = require('cheerio')

async function charaCheck(query) {
     return new Promise((resolve, reject) => {
          const char = query
          Axios.get('https://myanimelist.net/character.php?cat=character&q=' + char)
          .then(({ data }) => {
               const $ = cheerio.load(data)
               const selector = '#content > table > tbody > tr:nth-child(1) > td > a'
               const small = $('#content > table > tbody > tr:nth-child(1) > td:nth-child(2) > small').text()
               const name = $(selector).text() + ' ' + small
               const url = $(selector).attr('href')
               resolve({
                    status: 200,
                    name: name,
                    message: `Found chara ${name} and added to database!`
               })

          }).catch(e => reject({
               status: 404,
               message: `Character ${query} was not found!`
          }))
     })
}

async function chara(query) {
     return new Promise((resolve, reject) => {
          const char = query
          Axios.get('https://myanimelist.net/character.php?cat=character&q=' + char)
          .then(({ data }) => {
               const $ = cheerio.load(data)
               const selector = '#content > table > tbody > tr:nth-child(1) > td > a'
               const small = $('#content > table > tbody > tr:nth-child(1) > td:nth-child(2) > small').text()
               const name = $(selector).text() + ' ' + small
               const url = $(selector).attr('href')
               selector_mov = '#content > table > tbody > tr:nth-child(1) > td:nth-child(3) > small > a'
               let serial = []
               $(selector_mov).get().map((res) => {
                    const name = $(res).text()
                    const url = 'https://myanimelist.net' + $(res).attr('href')
                    serial.push({
                         Anime: name,
                         url: url
                    })
               })

               Axios.get(url)
               .then(({ data }) => {
                    const $ = cheerio.load(data)
                    const res_desc = $('#content > table > tbody > tr > td:nth-child(2)').text().split('\n\n\n\n\n\t  ')[1].split('            \n        \n')[0].replace(')',')\n')
                    const img = $('#content > table > tbody > tr > td.borderClass > div > a > img').attr('data-src')
                    const result = {
                         status: 200,
                         name: name,
                         image: img,
                         full_desc: res_desc,
                         url: url,
                         anime: serial
                    }
                    resolve(result)
               }).catch(reject)
          }).catch(e => reject({
               status: 404,
               message: `Character ${query} was not found!`
          }))
     })
}

chara('luffy')
.then(console.log)    
.catch(e => console.log(e))