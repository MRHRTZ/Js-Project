const request = require('request');
const cheerio = require('cheerio');

const BaseUrlEphoto = 'https://en.ephoto360.com'
let pathEphoto = [
     '/create-a-awesome-logo-sci-fi-effects-492.html'
]

function logopubgvid(text, line_1, line_2) {
     return new Promise((resolve, reject) => {
          const options = {
               jar: true,
               method: 'GET',
               url: BaseUrlEphoto + pathEphoto[0]
          }
          request.get(options, (err, response, body) => {
               const $ = cheerio.load(body)
               const token = $('#token').attr('value')
               const optionsPost = {
                    jar: true,
                    method: 'POST',
                    url: BaseUrlEphoto + pathEphoto[0],
                    formData: {
                         'text[]': [
                              text,
                              line_1,
                              line_2,
                         ],
                         'submit': 'GO',
                         'token': token
                    }
               }
               request.post(optionsPost, (err, request, body) => {
                    const $ = cheerio.load(body)
                    const result = {
                         result: $('div.btn-group > a.save-image-btn').attr('href') 
                    }
                    resolve(body)
               })
          })
     })
}

logopubgvid('MRHRTZ', 'merhabot', 'polepah')
.then(console.log)
.catch(console.log)