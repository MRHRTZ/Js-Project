const cron = require('node-cron')
const { default: Axios } = require('axios')
const fs = require('fs')

const dataWaktu = JSON.parse(fs.readFileSync('./dataadz.json', 'utf-8'))

const updateTime = Axios.get('https://api.pray.zone/v2/times/today.json?city=bandung')
     .then(({ data }) => {
          const isi = data.results.datetime[0].times
          const shubuh = isi.Fajr
          const magrib = isi.Maghrib

          dataWaktu[0].shubuh = shubuh
          dataWaktu[0].magrib = magrib

          fs.writeFileSync('./dataadz.json', JSON.stringify(dataWaktu, null, 2))
     })

const jamsub = Number(dataWaktu[0].shubuh.split(':')[0])
const menitsub = Number(dataWaktu[0].shubuh.split(':')[1])

const jammag = Number(dataWaktu[0].magrib.split(':')[0])
const menitmag = Number(dataWaktu[0].magrib.split(':')[1])

cron.schedule(`0 ${menitsub} ${jamsub} * * *`, () => {
     console.log('Waktu Shubuh')
     updateTime
})

cron.schedule(`0 ${menitmag} ${jammag} * * *`, () => {
     console.log('Waktu Shubuh')
     updateTime
})