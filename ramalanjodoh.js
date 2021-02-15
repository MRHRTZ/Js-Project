const { default: Axios } = require('axios')
const cheerio = require('cheerio')

const nama1 = 'Asep'
const nama2 = 'Udin'

Axios.get('https://www.primbon.com/kecocokan_nama_pasangan.php?nama1='+nama1+'&nama2='+nama2+'&proses=+Submit%21+')
.then(({ data }) => {
     const $ = cheerio.load(data)
     const progress = 'https://www.primbon.com/'+$('#body > img').attr('src')
     const isi = $('#body').text().split(nama2)[1].replace('< Hitung Kembali','').split('\n')[0]
     const posi = isi.split('Sisi Negatif Anda: ')[0].replace('Sisi Positif Anda: ','')
     const nega = isi.split('Sisi Negatif Anda: ')[1]
     const res = { result: {
          nama1: nama1,
          nama2: nama2,
          thumb: progress,
          positif: posi,
          negatif: nega
     } }
     console.log(res)
})