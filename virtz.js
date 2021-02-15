const { default: Axios } = require('axios')
const cheerio = require('cheerio')
const { writeFileSync } = require('fs')

Axios.get('https://github.com/ArroKM/vir')
.then(({ data }) => {
     const $ = cheerio.load(data)
     let datav = []
     $('a.js-navigation-open.link-gray-dark').get().map((rest) => {
          datav.push( 'https://raw.githubusercontent.com/ArroKM/vir/master/' + $(rest).attr('title'))
     })
     const virtz = datav.slice(2)
     Axios.get(virtz[0])
     .then(({ data }) => {
          writeFileSync('./piltex.txt', data)
     })
     // console.log(virtz.length)
     
})