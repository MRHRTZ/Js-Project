const cheerio = require('cheerio')
const fs = require('fs')
const $ = cheerio.load(fs.readFileSync('./restextpro.html','utf8'))

console.log($('#content-wrapper > section > div > div.col-md-9 > div:nth-child(4) > div > img').attr('src'))