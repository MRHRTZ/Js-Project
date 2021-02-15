const { default: Axios } = require('axios')
const cheerio = require('cheerio')

function artimimpi(katakunci) {
     return new Promise((resolve, reject) => {
          Axios.get('https://www.primbon.com/tafsir_mimpi.php?mimpi=' + katakunci + '&submit=+Submit+')
          .then(({ data }) => {
          const $ = cheerio.load(data)
          const detect = $('#body > font > i').text()
          const isAva = /Tidak ditemukan/g.test(detect) ? false : true
          if (isAva) {
              const isi = $('#body').text().split(`Hasil pencarian untuk kata kunci: ${katakunci}`)[1].replace(/\n\n\n\n\n\n\n\n\n/gi,'\n')
              const res = {
                   status: true,
                   result: isi
              }
              resolve(res)
          } else {
               const res = {
                    status: false,
                    result: `Data tidak ditemukan! Gunakan kata kunci.`
               }
               resolve(res)
          }
          }) 
          .catch(reject) 
     })
}

artimimpi('rumah').then(a => console.log(a))
