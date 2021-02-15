const Browser = require('zombie');
const cheerio = require('cheerio');
const googleit = require('google-it')
const { default: Axios } = require('axios');
const fs = require('fs')

async function chordindo(query) {
     return new Promise(async(resolve, reject) => {
          await googleit({ 'query': `intext:${query} site:https://www.chordindonesia.com/`, disableConsole: true })
          .then((data) => {
               const url = data[0].link
               Browser.visit(url, function(error, browser) {
                    const loader = browser.html()
                    const $ = cheerio.load(loader)
                    const title = $('header > h1').text()
                    const chord = $('pre').text().replace(url, '\n')
                    resolve({
                         status: 200,
                         title: title,
                         chord: chord
                    })
               });
          }).catch(e => reject({status: 404, message: 'Maaf data tersebut tidak ditemukan!'}))
     })
}

chordindo("mungkinkah stinky")
.then(res => console.log(res))
.catch(console.log)




