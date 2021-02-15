const { default: Axios } = require('axios')
const cheerio = require('cheerio')

const name = 'Asep'

Axios.get(`https://www.primbon.com/arti_nama.php?nama1=${name}&proses=+Submit%21+`)
.then(({ data }) => {
     const $ = cheerio.load(data)
     const result = $('#body').text().split('Nama:')[0]
     console.log(result)
})