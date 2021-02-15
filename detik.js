const { default: Axios } = require('axios')
const cheerio = require('cheerio')

Axios.get('https://news.detik.com/ajax/mostpopular')
.then(({ data }) => {
     const $ = cheerio.load(data.html)
     let title = []
     let url = []
     $('div > h3 > a').get().map((rest) => {
          title.push($(rest).text())
     })

     $('div > h3 > a').get().map((rest) => {
          url.push($(rest).attr('href'))
     })
     let result = []
     for (let i = 0; i < title.length; i++) {
          result.push({
               title: title[i],
               url: url[i]
          })
     }
     console.log(result)
})