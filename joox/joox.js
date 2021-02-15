const { default: Axios } = require("axios");

function joox(query) {
     return new Promise((resolve, reject) => {
          const time = Math.floor(new Date() / 1000)
          Axios.get('http://api.joox.com/web-fcgi-bin//web_search?lang=id&country=id&type=0&search_input=' + query + '&pn=1&sin=0&ein=29&_='+time)
          .then(({ data }) => {
               let result = []
               let hasil = []
               let promoses = []
               let ids = []
               data.itemlist.forEach(result => {
                    ids.push(result.songid)
               });
               for (let i = 0; i < data.itemlist.length; i++) {
                    const get = 'http://api.joox.com/web-fcgi-bin/web_get_songinfo?songid='+ids[i]
                    promoses.push(
                         Axios.get(get, { headers: {
                              Cookie:'wmid=142420656; user_type=1; country=id; session_key=2a5d97d05dc8fe238150184eaf3519ad;'
                         } })
                         .then(({ data }) => {
                              const res = JSON.parse(data.replace('MusicInfoCallback(','').replace('\n)',''))
                              hasil.push({
                                   lagu: res.msong,
                                   album: res.malbum,
                                   penyanyi: res.msinger,
                                   publish: res.public_time,
                                   img: res.imgSrc,
                                   mp3: res.mp3Url
                              })
                              
                              Axios.get('http://api.joox.com/web-fcgi-bin/web_lyric?musicid='+ ids[i] +'&lang=id&country=id&_='+time)
                              .then(({ data }) => {
                                   const lirik = JSON.parse(data.replace('MusicJsonCallback(','').replace('\n)','')).lyric
                                   const buff = new Buffer.from(lirik, 'base64')
                                   const ash = buff.toString('utf-8').replace('Lirik didapat dari pihak ketiga','Created By MRHRTZ')
                                   result.push({
                                        result: ash
                                   })
                                   Promise.all(promoses).then(() => resolve({
                                        status: true,
                                        message: "Created By MRHRTZ",
                                        data: hasil,
                                        lirik: result
                                   }))
                              }).catch(reject)
                         }).catch(reject)    
                    )
               }
          }).catch(reject)
     })
}

joox('perlahan guyon waton').then(a => console.log(a))