//const searchYoutube = require('youtube-api-v3-search')
const { YoutubeDataAPI } = require("youtube-v3-api")
const API_KEY = 'AIzaSyCK8o5oeLgg5-TovyeYFIZHOuhpa79Xs5c'
const api = new YoutubeDataAPI(API_KEY)

// const maumu = {
//   q:'Miawaug the last of us',
//   pageToken:'CAUQAA'
// }

const serc = 'miauaug pamali'
const jmpage = 6

const avv = 'https://www.youtube.com/watch?v='

api.searchAll(serc,jmpage).then((data) => {
  const jarak = data.items.length
  for (let i = 0; i < jarak; i++) {

    const id = data.items[i].id.videoId
    const channel = data.items[i].snippet.channelTitle
    const title = data.items[i].snippet.title
    const thumb = data.items[0].snippet.thumbnails.high.url
    const pubs = data.items[i].snippet.publishTime.replace(/T|Z/gi,' ')
   // console.log(`ID : ${id}\nNama Channel : ${channel}\nUrl : ${avv+id}\nTitle : ${title}\nWaktu publish : ${pubs}\nImg Thumb : ${thumb}\n\n`);
  }

 // console.log(data.items[0].snippet.thumbnails.high.url)
},(err) => {
  console.error(err);
})

api.searchVideo("Gy_5P0uaFOw").then((data) => {
  console.log(data.items);
},(err) => {
  console.error(err);
})

// const SearchYT = (KEH, q) => new Promise((resolve, reject) => {
//   console.log(`Scrapping...`)
//   searchYoutube(KEH, q)
//       .then(async res => {
//         const desc = await res.json()
//         resolve(desc)
//       })
//       .catch((err) => reject(err))
// })

//const { searchYoutube } = SearchYT()
// try {
// const GetData = searchYoutube(KEHYT,maumu)
// .then(async hasi => {
//  console.log(hasi.items)
// })
// console.log(GetData)
// } catch (err) {
//   console.log(err)
// }




// const Hazel = (Kunci,Serah) => {
//   searchYoutube(Kunci,Serah)
//   .then((res) => console.log(json.items))
//   .catch((err) => console.log(err))
// }

// Hazel(KEHYT,maumu)