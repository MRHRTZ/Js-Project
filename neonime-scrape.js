const { default: Axios } = require('axios')
const cheerio = require('cheerio')
const fs = require('fs')

function neonimePopular() {
     return new Promise((resolve, reject) => {
          Axios.get('https://neonime.vip')
               .then(({ data }) => {
                    const $ = cheerio.load(data)
                    let thumb = []
                    let title = []
                    let ress = []
                    $('div.imagens > a > img').get().map((rest) => {
                         thumb.push($(rest).attr('data-src'))
                    })
                    $('div > div > div > div > span').get().map((rest) => {
                         title.push($(rest).text())
                    })
                    fs.writeFileSync('./datachord.html', data)
                    for (let i = 0; i < title.length; i++) {
                         ress.push({
                              title: title[i],
                              mini_thumb: thumb[i]
                         })
                    }
                    resolve({
                         status: true,
                         message: "Created By MRHRTZ",
                         name: "Neonime Popular",
                         result: ress.slice(0, 8)
                    })
               }).catch(() => reject({
                    status: false,
                    message: "Created By MRHRTZ"
               }))
     })
}

function neonimeLatest() {
     return new Promise((resolve, reject) => {
          Axios.get('https://neonime.vip')
               .then(({ data }) => {
                    const $ = cheerio.load(data)
                    let ress = []
                    let season = []
                    let hasil = []
                    $('div.item.episode-home > span').get().map((ress) => {
                         season.push($(ress).text())
                    })
                    $('div.item.episode-home > div.image > a > img').get().map((rest) => {
                         ress.push({
                              title: $(rest).attr('alt'),
                              thumb: $(rest).attr('data-src')
                         })
                    })
                    for (let i = 0; i < ress.length; i++) {
                         hasil.push({
                              title: ress[i].title,
                              season: season[i],
                              thumb: ress[i].thumb
                         })
                    }
                    const result = {
                         status: true,
                         message: "Created By MRHRTZ",
                         name: "Neonime Latest Release",
                         result: hasil
                    }
                    resolve(result)
               }).catch(() => reject({
                    status: false,
                    message: "Created By MRHRTZ"
               }))
     })
}

neonimePopular()
     .then(console.log)
     .catch(console.log)

neonimeLatest()
     .then(console.log)
     .catch(console.log)