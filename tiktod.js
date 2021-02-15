const tiktok = require('tiktok-scraper')
const { exec } = require('child_process')

const url = 'https://vt.tiktok.com/ZSsY7d9S/'

function tiktod(url) {
  return new Promise((resolve, reject) => {
    try {
      tiktok.getVideoMeta(url, {  })
      .then((result) => {
        const data = result.collector[0]
        let Tag = []
        for (let i = 0; i < data.hashtags.length; i++) {
          const name = data.hashtags[i].name
          Tag.push(name)
        }
        console.log(result)
        const id = data.id
        const text = data.text
        const date = data.createTime
        const name = data.authorMeta.name
        const nick = data.authorMeta.nickName
        const music = data.musicMeta.musicName
        const thumb = data.imageUrl
        const hastag = Tag

        // resolve({
        //   id: id,
        //   name: name,
        //   nickname: nick,
        //   timestamp: date,
        //   thumb: thumb,
        //   text: text,
        //   music: music,
        //   hastag: hastag
        // })
      })
    .catch(reject)
  } catch (error) {
    console.log(error)
  }
  })
} 

tiktod(url).then(resul => {
  const meta = resul
  const exekute = exec('tiktok-scraper video ' + url + ' -d')

  exekute.stdout.on('data', function(data) {
    const res = { loc: `${data.replace('Video location: ','').replace('\n','')}` }
    const json = {
      meta,
      res,
    } 
    console.log(json)
  })
})

tiktod(url).then(console.log)
