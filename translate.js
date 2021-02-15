const { default: Axios } = require('axios')
const cheerio = require('cheerio')

const text = 'Kamu baik'
const to = 'en'
const getnow = `https://translate.yandex.com/?lang=id-en&text=Kamu`
Axios.get(getnow)
.then(({ data }) => {
     console.log(data)
})