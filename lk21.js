const { default: Axios } = require('axios')
const cheerio = require('cheerio')


function lk21(query) {
     return new Promise((resolve, reject) => {
          const film = query
          Axios.get('http://167.99.71.200/?s=' + film)
          .then(({ data }) => {
               const $ = cheerio.load(data)
               const url = $('div > div.content-thumbnail.text-center > a').attr('href')
               Axios.get(url)
               .then(({ data }) => {
                    const $ = cheerio.load(data)
                    const judul = $('div > div.gmr-movie-data.clearfix > div > h1').text()
                    const desc = $('div > div.entry-content.entry-content-single > p:nth-child(1)').text()
                    const thumb = $('#movie_player > div.ytp-cued-thumbnail-overlay > div').attr('style')
                    const link1 = $('#download1').attr('href')
                    const link2 = $('#download2').attr('href')
                    const link = []
                    link.push({
                         link1,
                         link2
                    })
                    const res = {
                         result: true,
                         title: judul,
                         description: desc,
                         link: link
                    }
                    resolve(res)
               }).catch(() => {
                    reject({
                         status: false,
                         result: `Tidak bisa menemukan data ${query}`
                    })
               })
          }).catch(() => {
               reject({
                    status: false,
                    result: `Tidak bisa menemukan data ${query}`
               })
          })
     })
}


lk21('jumanji').then(a => console.log(a))