const request = require('request');
const cheerio = require('cheerio');

const BaseUrl = 'https://textpro.me'
let path = [
     '/advanced-glow-text-effect-873.html',
     '/create-a-futuristic-technology-neon-light-text-effect-1006.html',
     '/create-a-cloud-text-effect-on-the-sky-online-1004.html',
     '/create-blackpink-logo-style-online-1001.html',
     '/sand-engraved-3d-text-effect-989.html',
     '/sci-fi-text-effect-855.html',
     '/dropwater-text-effect-872.html',
     '/green-neon-text-effect-874.html',
     '/bokeh-text-effect-876.html',
     '/neon-text-effect-online-879.html',
     '/thunder-text-effect-online-881.html',
     '/horror-blood-text-effect-online-883.html',
     '/firework-sparkle-text-effect-930.html',
     '/blood-text-on-the-frosted-glass-941.html',
     '/neon-light-text-effect-with-galaxy-style-981.html',
     '/create-logo-style-marvel-studios-online-971.html',
     '/pornhub-style-logo-online-generator-free-977.html',
     '/create-glitch-text-effect-style-tik-tok-983.html',
     '/create-wolf-logo-galaxy-online-936.html',
     '/create-3d-glue-text-effect-with-realistic-style-986.html',
     '/create-logo-joker-online-934.html',
     '/matrix-style-text-effect-online-884.html',
     '/blue-metal-text-effect-831.html'

]

/*
  'glue': '/create-3d-glue-text-effect-with-realistic-style-986.html', .
 'joker': '/create-logo-joker-online-934.html', .
            'matrix': '/matrix-style-text-effect-online-884.html',
 'blue_metal': '/blue-metal-text-effect-831.html',
*/

function advancedglow(text) {
     return new Promise((resolve, reject) => {
          const opt = {
               jar: true,
               method: 'GET',
               url: BaseUrl + path[0],
               headers : {
                    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:34.0) Gecko/20100101 Firefox/34.0'
               }
          }
          request.get(opt, (err, response, body) => {
               if (err) {
                    reject(err)
                    console.log(err)
                    return
               }
               const $ = cheerio.load(body)
               const token = $('#token').attr('value')
               // console.log(body)
               const opts = {
                    jar: true,
                    method: 'POST',
                    url: BaseUrl + path[0],
                    formData: {
                         'text[]': text,
                         'submit': 'Go',
                         'token': token
                    },
                    headers : {
                         'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:34.0) Gecko/20100101 Firefox/34.0'
                    }
               }
               request.post(opts, (err, response, body) => {
                    if (err) {
                         reject(err)
                         console.log(err)
                         return
                    }
                    const $ = cheerio.load(body)
                    const save = BaseUrl + $('div.btn-group > a').attr('href')
                    const result = {
                         result: save
                    }
                    resolve(result)
               })
          }) 
     })
}



function futuristic(text) {
     return new Promise((resolve, reject) => {
          const opt = {
               jar: true,
               method: 'GET',
               url: BaseUrl + path[1]
          }
          request.get(opt, (err, response, body) => {
               if (err) {
                    reject(err)
                    console.log(err)
                    return
               }
               const $ = cheerio.load(body)
               const token = $('#token').attr('value')
               console.log(body)
               // const opts = {
               //      jar: true,
               //      method: 'POST',
               //      url: BaseUrl + path[1],
               //      formData: {
               //           'text[]': text,
               //           'submit': 'Go',
               //           'token': token
               //      }
               // }
               // request.post(opts, (err, response, body) => {
               //      if (err) {
               //           reject(err)
               //           console.log(err)
               //           return
               //      }
               //      const $ = cheerio.load(body)
               //      const save = BaseUrl + $('div.btn-group > a').attr('href')
               //      const result = {
               //           result: save
               //      }
               //      resolve(result)
               // })
          }) 
     })
}

function cloud(text) {
     return new Promise((resolve, reject) => {
          const opt = {
               jar: true,
               method: 'GET',
               url: BaseUrl + path[2]
          }
          request.get(opt, (err, response, body) => {
               if (err) {
                    reject(err)
                    console.log(err)
                    return
               }
               const $ = cheerio.load(body)
               const token = $('#token').attr('value')
               const opts = {
                    jar: true,
                    method: 'POST',
                    url: BaseUrl + path[2],
                    formData: {
                         'text[]': text,
                         'submit': 'Go',
                         'token': token
                    }
               }
               request.post(opts, (err, response, body) => {
                    if (err) {
                         reject(err)
                         console.log(err)
                         return
                    }
                    const $ = cheerio.load(body)
                    const save = BaseUrl + $('div.btn-group > a').attr('href')
                    const result = {
                         result: save
                    }
                    resolve(result)
               })
          }) 
     })
}


function blackpink(text) {
     return new Promise((resolve, reject) => {
          const opt = {
               jar: true,
               method: 'GET',
               url: BaseUrl + path[3]
          }
          request.get(opt, (err, response, body) => {
               if (err) {
                    reject(err)
                    console.log(err)
                    return
               }
               const $ = cheerio.load(body)
               const token = $('#token').attr('value')
               const opts = {
                    jar: true,
                    method: 'POST',
                    url: BaseUrl + path[3],
                    formData: {
                         'text[]': text,
                         'submit': 'Go',
                         'token': token
                    }
               }
               request.post(opts, (err, response, body) => {
                    if (err) {
                         reject(err)
                         console.log(err)
                         return
                    }
                    const $ = cheerio.load(body)
                    const save = BaseUrl + $('div.btn-group > a').attr('href')
                    const result = {
                         result: save
                    }
                    resolve(result)
               })
          }) 
     })
}


function sand(text) {
     return new Promise((resolve, reject) => {
          const opt = {
               jar: true,
               method: 'GET',
               url: BaseUrl + path[4]
          }
          request.get(opt, (err, response, body) => {
               if (err) {
                    reject(err)
                    console.log(err)
                    return
               }
               const $ = cheerio.load(body)
               const token = $('#token').attr('value')
               const opts = {
                    jar: true,
                    method: 'POST',
                    url: BaseUrl + path[4],
                    formData: {
                         'text[]': text,
                         'submit': 'Go',
                         'token': token
                    }
               }
               request.post(opts, (err, response, body) => {
                    if (err) {
                         reject(err)
                         console.log(err)
                         return
                    }
                    const $ = cheerio.load(body)
                    const save = BaseUrl + $('div.btn-group > a').attr('href')
                    const result = {
                         result: save
                    }
                    resolve(result)
               })
          }) 
     })
}


function scifi(text) {
     return new Promise((resolve, reject) => {
          const opt = {
               jar: true,
               method: 'GET',
               url: BaseUrl + path[5]
          }
          request.get(opt, (err, response, body) => {
               if (err) {
                    reject(err)
                    console.log(err)
                    return
               }
               const $ = cheerio.load(body)
               const token = $('#token').attr('value')
               const opts = {
                    jar: true,
                    method: 'POST',
                    url: BaseUrl + path[5],
                    formData: {
                         'text[]': text,
                         'submit': 'Go',
                         'token': token
                    }
               }
               request.post(opts, (err, response, body) => {
                    if (err) {
                         reject(err)
                         console.log(err)
                         return
                    }
                    const $ = cheerio.load(body)
                    const save = BaseUrl + $('div.btn-group > a').attr('href')
                    const result = {
                         result: save
                    }
                    resolve(result)
               })
          }) 
     })
}

function dropwater(text) {
     return new Promise((resolve, reject) => {
          const opt = {
               jar: true,
               method: 'GET',
               url: BaseUrl + path[6]
          }
          request.get(opt, (err, response, body) => {
               if (err) {
                    reject(err)
                    console.log(err)
                    return
               }
               const $ = cheerio.load(body)
               const token = $('#token').attr('value')
               const opts = {
                    jar: true,
                    method: 'POST',
                    url: BaseUrl + path[6],
                    formData: {
                         'text[]': text,
                         'submit': 'Go',
                         'token': token
                    }
               }
               request.post(opts, (err, response, body) => {
                    if (err) {
                         reject(err)
                         console.log(err)
                         return
                    }
                    const $ = cheerio.load(body)
                    const save = BaseUrl + $('div.btn-group > a').attr('href')
                    const result = {
                         result: save
                    }
                    resolve(result)
               })
          }) 
     })
}


function codmw(text) {
     return new Promise((resolve, reject) => {
          const opt = {
               jar: true,
               method: 'GET',
               url: BaseUrl + path[7]
          }
          request.get(opt, (err, response, body) => {
               if (err) {
                    reject(err)
                    console.log(err)
                    return
               }
               const $ = cheerio.load(body)
               const token = $('#token').attr('value')
               const opts = {
                    jar: true,
                    method: 'POST',
                    url: BaseUrl + path[7],
                    formData: {
                         'text[]': text,
                         'submit': 'Go',
                         'token': token
                    }
               }
               request.post(opts, (err, response, body) => {
                    if (err) {
                         reject(err)
                         console.log(err)
                         return
                    }
                    const $ = cheerio.load(body)
                    const save = BaseUrl + $('div.btn-group > a').attr('href')
                    const result = {
                         result: save
                    }
                    resolve(result)
               })
          }) 
     })
}

function bokeh(text) {
     return new Promise((resolve, reject) => {
          const opt = {
               jar: true,
               method: 'GET',
               url: BaseUrl + path[8]
          }
          request.get(opt, (err, response, body) => {
               if (err) {
                    reject(err)
                    console.log(err)
                    return
               }
               const $ = cheerio.load(body)
               const token = $('#token').attr('value')
               const opts = {
                    jar: true,
                    method: 'POST',
                    url: BaseUrl + path[8],
                    formData: {
                         'text[]': text,
                         'submit': 'Go',
                         'token': token
                    }
               }
               request.post(opts, (err, response, body) => {
                    if (err) {
                         reject(err)
                         console.log(err)
                         return
                    }
                    const $ = cheerio.load(body)
                    const save = BaseUrl + $('div.btn-group > a').attr('href')
                    const result = {
                         result: save
                    }
                    resolve(result)
               })
          }) 
     })
}

function neon(text) {
     return new Promise((resolve, reject) => {
          const opt = {
               jar: true,
               method: 'GET',
               url: BaseUrl + path[9]
          }
          request.get(opt, (err, response, body) => {
               if (err) {
                    reject(err)
                    console.log(err)
                    return
               }
               const $ = cheerio.load(body)
               const token = $('#token').attr('value')
               const opts = {
                    jar: true,
                    method: 'POST',
                    url: BaseUrl + path[9],
                    formData: {
                         'text[]': text,
                         'submit': 'Go',
                         'token': token
                    }
               }
               request.post(opts, (err, response, body) => {
                    if (err) {
                         reject(err)
                         console.log(err)
                         return
                    }
                    const $ = cheerio.load(body)
                    const save = BaseUrl + $('div.btn-group > a').attr('href')
                    const result = {
                         result: save
                    }
                    resolve(result)
               })
          }) 
     })
}

function thunder(text) {
     return new Promise((resolve, reject) => {
          const opt = {
               jar: true,
               method: 'GET',
               url: BaseUrl + path[10]
          }
          request.get(opt, (err, response, body) => {
               if (err) {
                    reject(err)
                    console.log(err)
                    return
               }
               const $ = cheerio.load(body)
               const token = $('#token').attr('value')
               const opts = {
                    jar: true,
                    method: 'POST',
                    url: BaseUrl + path[10],
                    formData: {
                         'text[]': text,
                         'submit': 'Go',
                         'token': token
                    }
               }
               request.post(opts, (err, response, body) => {
                    if (err) {
                         reject(err)
                         console.log(err)
                         return
                    }
                    const $ = cheerio.load(body)
                    const save = BaseUrl + $('div.btn-group > a').attr('href')
                    const result = {
                         result: save
                    }
                    resolve(result)
               })
          }) 
     })
}


function horrorblood(text) {
     return new Promise((resolve, reject) => {
          const opt = {
               jar: true,
               method: 'GET',
               url: BaseUrl + path[11]
          }
          request.get(opt, (err, response, body) => {
               if (err) {
                    reject(err)
                    console.log(err)
                    return
               }
               const $ = cheerio.load(body)
               const token = $('#token').attr('value')
               const opts = {
                    jar: true,
                    method: 'POST',
                    url: BaseUrl + path[11],
                    formData: {
                         'text[]': text,
                         'submit': 'Go',
                         'token': token
                    }
               }
               request.post(opts, (err, response, body) => {
                    if (err) {
                         reject(err)
                         console.log(err)
                         return
                    }
                    const $ = cheerio.load(body)
                    const save = BaseUrl + $('div.btn-group > a').attr('href')
                    const result = {
                         result: save
                    }
                    resolve(result)
               })
          }) 
     })
}


function firework(text) {
     return new Promise((resolve, reject) => {
          const opt = {
               jar: true,
               method: 'GET',
               url: BaseUrl + path[12]
          }
          request.get(opt, (err, response, body) => {
               if (err) {
                    reject(err)
                    console.log(err)
                    return
               }
               const $ = cheerio.load(body)
               const token = $('#token').attr('value')
               const opts = {
                    jar: true,
                    method: 'POST',
                    url: BaseUrl + path[12],
                    formData: {
                         'text[]': text,
                         'submit': 'Go',
                         'token': token
                    }
               }
               request.post(opts, (err, response, body) => {
                    if (err) {
                         reject(err)
                         console.log(err)
                         return
                    }
                    const $ = cheerio.load(body)
                    const save = BaseUrl + $('div.btn-group > a').attr('href')
                    const result = {
                         result: save
                    }
                    resolve(result)
               })
          }) 
     })
}

function bloodglass(text) {
     return new Promise((resolve, reject) => {
          const opt = {
               jar: true,
               method: 'GET',
               url: BaseUrl + path[13]
          }
          request.get(opt, (err, response, body) => {
               if (err) {
                    reject(err)
                    console.log(err)
                    return
               }
               const $ = cheerio.load(body)
               const token = $('#token').attr('value')
               const opts = {
                    jar: true,
                    method: 'POST',
                    url: BaseUrl + path[13],
                    formData: {
                         'text[]': text,
                         'submit': 'Go',
                         'token': token
                    }
               }
               request.post(opts, (err, response, body) => {
                    if (err) {
                         reject(err)
                         console.log(err)
                         return
                    }
                    const $ = cheerio.load(body)
                    const save = BaseUrl + $('div.btn-group > a').attr('href')
                    const result = {
                         result: save
                    }
                    resolve(result)
               })
          }) 
     })
}


function neonlight(text) {
     return new Promise((resolve, reject) => {
          const opt = {
               jar: true,
               method: 'GET',
               url: BaseUrl + path[14]
          }
          request.get(opt, (err, response, body) => {
               if (err) {
                    reject(err)
                    console.log(err)
                    return
               }
               const $ = cheerio.load(body)
               const token = $('#token').attr('value')
               const opts = {
                    jar: true,
                    method: 'POST',
                    url: BaseUrl + path[14],
                    formData: {
                         'text[]': text,
                         'submit': 'Go',
                         'token': token
                    }
               }
               request.post(opts, (err, response, body) => {
                    if (err) {
                         reject(err)
                         console.log(err)
                         return
                    }
                    const $ = cheerio.load(body)
                    const save = BaseUrl + $('div.btn-group > a').attr('href')
                    const result = {
                         result: save
                    }
                    resolve(result)
               })
          }) 
     })
}


function marvel(text_1, text_2) {
     return new Promise((resolve, reject) => {
          const opt = {
               jar: true,
               method: 'GET',
               url: BaseUrl + path[15]
          }
          request.get(opt, (err, response, body) => {
               if (err) {
                    reject(err)
                    console.log(err)
                    return
               }
               const $ = cheerio.load(body)
               const token = $('#token').attr('value')
               const opts = {
                    jar: true,
                    method: 'POST',
                    url: BaseUrl + path[15],
                    formData: {
                         'text[]': [
                              text_1,
                              text_2
                         ],
                         'submit': 'Go',
                         'token': token
                    }
               }
               request.post(opts, (err, response, body) => {
                    if (err) {
                         reject(err)
                         console.log(err)
                         return
                    }
                    const $ = cheerio.load(body)
                    const save = BaseUrl + $('div.btn-group > a').attr('href')
                    const result = {
                         result: save
                    }
                    resolve(result)
               })
          }) 
     })
}


function phub(text_1, text_2) {
     return new Promise((resolve, reject) => {
          const opt = {
               jar: true,
               method: 'GET',
               url: BaseUrl + path[16]
          }
          request.get(opt, (err, response, body) => {
               if (err) {
                    reject(err)
                    console.log(err)
                    return
               }
               const $ = cheerio.load(body)
               const token = $('#token').attr('value')
               const opts = {
                    jar: true,
                    method: 'POST',
                    url: BaseUrl + path[16],
                    formData: {
                         'text[]': [
                              text_1,
                              text_2
                         ],
                         'submit': 'Go',
                         'token': token
                    }
               }
               request.post(opts, (err, response, body) => {
                    if (err) {
                         reject(err)
                         console.log(err)
                         return
                    }
                    const $ = cheerio.load(body)
                    const save = BaseUrl + $('div.btn-group > a').attr('href')
                    const result = {
                         result: save
                    }
                    resolve(result)
               })
          }) 
     })
}


function glitch(text_1, text_2) {
     return new Promise((resolve, reject) => {
          const opt = {
               jar: true,
               method: 'GET',
               url: BaseUrl + path[17]
          }
          request.get(opt, (err, response, body) => {
               if (err) {
                    reject(err)
                    console.log(err)
                    return
               }
               const $ = cheerio.load(body)
               const token = $('#token').attr('value')
               const opts = {
                    jar: true,
                    method: 'POST',
                    url: BaseUrl + path[17],
                    formData: {
                         'text[]': [
                              text_1,
                              text_2
                         ],
                         'submit': 'Go',
                         'token': token
                    }
               }
               request.post(opts, (err, response, body) => {
                    if (err) {
                         reject(err)
                         console.log(err)
                         return
                    }
                    const $ = cheerio.load(body)
                    const save = BaseUrl + $('div.btn-group > a').attr('href')
                    const result = {
                         result: save
                    }
                    resolve(result)
               })
          }) 
     })
}

function wolf_galaxy(text_1, text_2) {
     return new Promise((resolve, reject) => {
          const opt = {
               jar: true,
               method: 'GET',
               url: BaseUrl + path[18]
          }
          request.get(opt, (err, response, body) => {
               if (err) {
                    reject(err)
                    console.log(err)
                    return
               }
               const $ = cheerio.load(body)
               const token = $('#token').attr('value')
               const opts = {
                    jar: true,
                    method: 'POST',
                    url: BaseUrl + path[18],
                    formData: {
                         'text[]': [
                              text_1,
                              text_2
                         ],
                         'submit': 'Go',
                         'token': token
                    }
               }
               request.post(opts, (err, response, body) => {
                    if (err) {
                         reject(err)
                         console.log(err)
                         return
                    }
                    const $ = cheerio.load(body)
                    const save = BaseUrl + $('div.btn-group > a').attr('href')
                    const result = {
                         result: save
                    }
                    resolve(result)
               })
          }) 
     })
}

function glue(text) {
     return new Promise((resolve, reject) => {
          const opt = {
               jar: true,
               method: 'GET',
               url: BaseUrl + path[19]
          }
          request.get(opt, (err, response, body) => {
               if (err) {
                    reject(err)
                    console.log(err)
                    return
               }
               const $ = cheerio.load(body)
               const token = $('#token').attr('value')
               const opts = {
                    jar: true,
                    method: 'POST',
                    url: BaseUrl + path[19],
                    formData: {
                         'text[]': text,
                         'submit': 'Go',
                         'token': token
                    }
               }
               request.post(opts, (err, response, body) => {
                    if (err) {
                         reject(err)
                         console.log(err)
                         return
                    }
                    const $ = cheerio.load(body)
                    const save = BaseUrl + $('div.btn-group > a').attr('href')
                    const result = {
                         result: save
                    }
                    resolve(result)
               })
          }) 
     })
}


function joker(text) {
     return new Promise((resolve, reject) => {
          const opt = {
               jar: true,
               method: 'GET',
               url: BaseUrl + path[20]
          }
          request.get(opt, (err, response, body) => {
               if (err) {
                    reject(err)
                    console.log(err)
                    return
               }
               const $ = cheerio.load(body)
               const token = $('#token').attr('value')
               const opts = {
                    jar: true,
                    method: 'POST',
                    url: BaseUrl + path[20],
                    formData: {
                         'text[]': text,
                         'submit': 'Go',
                         'token': token
                    }
               }
               request.post(opts, (err, response, body) => {
                    if (err) {
                         reject(err)
                         console.log(err)
                         return
                    }
                    const $ = cheerio.load(body)
                    const save = BaseUrl + $('div.btn-group > a').attr('href')
                    const result = {
                         result: save
                    }
                    resolve(result)
               })
          }) 
     })
}


function matrix(text) {
     return new Promise((resolve, reject) => {
          const opt = {
               jar: true,
               method: 'GET',
               url: BaseUrl + path[21]
          }
          request.get(opt, (err, response, body) => {
               if (err) {
                    reject(err)
                    console.log(err)
                    return
               }
               const $ = cheerio.load(body)
               const token = $('#token').attr('value')
               const opts = {
                    jar: true,
                    method: 'POST',
                    url: BaseUrl + path[21],
                    formData: {
                         'text[]': text,
                         'submit': 'Go',
                         'token': token
                    }
               }
               request.post(opts, (err, response, body) => {
                    if (err) {
                         reject(err)
                         console.log(err)
                         return
                    }
                    const $ = cheerio.load(body)
                    const save = BaseUrl + $('div.btn-group > a').attr('href')
                    const result = {
                         result: save
                    }
                    resolve(result)
               })
          }) 
     })
}


function blue_metal(text) {
     return new Promise((resolve, reject) => {
          const opt = {
               jar: true,
               method: 'GET',
               url: BaseUrl + path[22]
          }
          request.get(opt, (err, response, body) => {
               if (err) {
                    reject(err)
                    console.log(err)
                    return
               }
               const $ = cheerio.load(body)
               const token = $('#token').attr('value')
               const opts = {
                    jar: true,
                    method: 'POST',
                    url: BaseUrl + path[22],
                    formData: {
                         'text[]': text,
                         'submit': 'Go',
                         'token': token
                    }
               }
               request.post(opts, (err, response, body) => {
                    if (err) {
                         reject(err)
                         console.log(err)
                         return
                    }
                    const $ = cheerio.load(body)
                    const save = BaseUrl + $('div.btn-group > a').attr('href')
                    const result = {
                         result: save
                    }
                    resolve(result)
               })
          }) 
     })
}

(async() => {
     console.log(await futuristic('MRHRTZ'))
})()