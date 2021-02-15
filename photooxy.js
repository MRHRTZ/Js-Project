const request = require('request');
const fs = require('fs');
const cheerio = require('cheerio');
const exec = require('child_process').exec;
const moment = require('moment');
const { stdout } = require('process');

const baseUrl = 'https://photooxy.com'
const path = [
     cd
]


function gtaV(path_file) {
     return new Promise((resolve, reject) => {
          try {
               const img = fs.readFileSync(path_file)
               const buff = Buffer.from(img).toString('base64')
               const opt = {
                    headers: {
                         'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    jar: true,
                    method: 'POST',
                    url: baseUrl + path[2],
                    form: {
                         'image_1': buff,
                         'login': 'OK'
                    }
               }
               request.post(opt, (err, response, body) => {
                    const $ = cheerio.load(body)
                    const result = {
                         result: $('div.btn-group > a').attr('href')
                    }
                    resolve(result)
               })
          } catch (error) {
               reject(error)
          }
     })
}


function dota(text, optionNumber) {
     return new Promise((resolve, reject) => {
          try {
               if (Number(optionNumber) > 5) {
                    resolve({ result: 'Failed! option number must 1-5' })
                    return
               } else if (Number(optionNumber) === NaN) {
                    resolve({ result: "Failed! You can't input string on number option." })
                    return
               }
               const opt = {
                    headers: {
                         'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    jar: true,
                    method: 'POST',
                    url: baseUrl + path[3],
                    form: {
                         'optionNumber_0': optionNumber,
                         'text_2': text,
                         'login': 'OK'
                    }
               }
               request.post(opt, (err, response, body) => {
                    const $ = cheerio.load(body)
                    const result = {
                         result: $('div.btn-group > a').attr('href')
                    }
                    resolve(result)
               })
          } catch (error) {
               reject(error)
          }

     })
}

function gunBanner(text_1, text_2, path_file) {
     return new Promise((resolve, reject) => {
          try {
               if (!text_1) {
                    resolve({ result: 'Failed! text 1 is empy' })
                    return
               } else if (!text_2) {
                    resolve({ result: 'Failed! text 2 is empy' })
                    return
               }
               const img = fs.readFileSync(path_file)
               const buff = Buffer.from(img).toString('base64')
               const opt = {
                    headers: {
                         'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    jar: true,
                    method: 'POST',
                    url: baseUrl + path[4],
                    form: {
                         'image_0': buff,
                         'text_2': text_1,
                         'text_3': text_2,
                         'login': 'OK'
                    }
               }
               request.post(opt, (err, response, body) => {
                    const $ = cheerio.load(body)
                    const result = {
                         result: $('div.btn-group > a').attr('href')
                    }
                    resolve(result)
               })
          } catch (error) {
               reject(error)
          }
     })
}

function googleKeyword(text_1, text_2, text_3) {
     return new Promise((resolve, reject) => {
          try {
               const opt = {
                    headers: {
                         'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    jar: true,
                    method: 'POST',
                    url: baseUrl + path[5],
                    form: {
                         'text_1': text_1,
                         'text_2': text_2,
                         'text_3': text_3,
                         'login': 'OK'
                    }
               }
               request.post(opt, (err, response, body) => {
                    const $ = cheerio.load(body)
                    const result = {
                         result: $('div.btn-group > a').attr('href')
                    }
                    resolve(result)
               })
          } catch (error) {
               reject(error)
          }
     })
}


function pubg(text_1, text_2) {
     return new Promise((resolve, reject) => {
          try {
               const opt = {
                    headers: {
                         'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    jar: true,
                    method: 'POST',
                    url: baseUrl + path[6],
                    form: {
                         'text_1': text_1,
                         'text_2': text_2,
                         'login': 'OK'
                    }
               }
               request.post(opt, (err, response, body) => {
                    const $ = cheerio.load(body)
                    const result = {
                         result: $('div.btn-group > a').attr('href')
                    }
                    resolve(result)
               })
          } catch (error) {
               reject(error)
          }
     })
}


function battlefield(text_1, text_2) {
     return new Promise((resolve, reject) => {
          try {
               const opt = {
                    headers: {
                         'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    jar: true,
                    method: 'POST',
                    url: baseUrl + path[7],
                    form: {
                         'text_1': text_1,
                         'text_2': text_2,
                         'login': 'OK'
                    }
               }
               request.post(opt, (err, response, body) => {
                    const $ = cheerio.load(body)
                    const result = {
                         result: $('div.btn-group > a').attr('href')
                    }
                    resolve(result)
               })
          } catch (error) {
               reject(error)
          }
     })
}


function coffee(text_1) {
     return new Promise((resolve, reject) => {
          try {
               const opt = {
                    headers: {
                         'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    jar: true,
                    method: 'POST',
                    url: baseUrl + path[8],
                    form: {
                         'text_1': text_1,
                         'login': 'OK'
                    }
               }
               request.post(opt, (err, response, body) => {
                    const $ = cheerio.load(body)
                    const result = {
                         result: $('div.btn-group > a').attr('href')
                    }
                    resolve(result)
               })
          } catch (error) {
               reject(error)
          }
     })
}

function horrorHouse(text_1) {
     return new Promise((resolve, reject) => {
          try {
               const opt = {
                    headers: {
                         'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    jar: true,
                    method: 'POST',
                    url: baseUrl + path[9],
                    form: {
                         'text_1': text_1,
                         'login': 'OK'
                    }
               }
               request.post(opt, (err, response, body) => {
                    const $ = cheerio.load(body)
                    const result = {
                         result: $('div.btn-group > a').attr('href')
                    }
                    resolve(result)
               })
          } catch (error) {
               reject(error)
          }
     })
}

function harryPotter(text_1) {
     return new Promise((resolve, reject) => {
          try {
               const opt = {
                    headers: {
                         'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    jar: true,
                    method: 'POST',
                    url: baseUrl + path[10],
                    form: {
                         'text_1': text_1,
                         'login': 'OK'
                    }
               }
               request.post(opt, (err, response, body) => {
                    const $ = cheerio.load(body)
                    const result = {
                         result: $('div.btn-group > a').attr('href')
                    }
                    resolve(result)
               })
          } catch (error) {
               reject(error)
          }
     })
}


function semok(text_1) {
     return new Promise((resolve, reject) => {
          try {
               const opt = {
                    headers: {
                         'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    jar: true,
                    method: 'POST',
                    url: baseUrl + path[0],
                    form: {
                         'text_1': text_1,
                         'login': 'OK'
                    }
               }
               request.post(opt, (err, response, body) => {
                    const $ = cheerio.load(body)
                    const result = {
                         result: $('div.btn-group > a').attr('href')
                    }
                    resolve(result)
               })
          } catch (error) {
               reject(error)
          }
     })
}


function burningFire(path_file) {
     return new Promise((resolve, reject) => {
          try {
               const img = fs.readFileSync(path_file)
               const buff = Buffer.from(img).toString('base64')
               const opt = {
                    headers: {
                         'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    jar: true,
                    method: 'POST',
                    url: baseUrl + path[11],
                    form: {
                         'image_0': buff,
                         'login': 'OK'
                    }
               }
               request.post(opt, (err, response, body) => {
                    const $ = cheerio.load(body)
                    const result = {
                         result: $('div.btn-group > a').attr('href')
                    }
                    resolve(result)
               })
          } catch (error) {
               reject(error)
          }
     })
}

function drawing(path_file) {
     return new Promise((resolve, reject) => {
          try {
               const img = fs.readFileSync(path_file)
               const buff = Buffer.from(img).toString('base64')
               const opt = {
                    headers: {
                         'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    jar: true,
                    method: 'POST',
                    url: baseUrl + path[12],
                    form: {
                         'image_1': buff,
                         'login': 'OK'
                    }
               }
               request.post(opt, (err, response, body) => {
                    const $ = cheerio.load(body)
                    const result = {
                         result: $('div.btn-group > a').attr('href')
                    }
                    resolve(result)
               })
          } catch (error) {
               reject(error)
          }
     })
}

function underwater(path_file) {
     return new Promise((resolve, reject) => {
          try {
               const img = fs.readFileSync(path_file)
               const buff = Buffer.from(img).toString('base64')
               const opt = {
                    headers: {
                         'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    jar: true,
                    method: 'POST',
                    url: baseUrl + path[13],
                    form: {
                         'image_0': buff,
                         'login': 'OK'
                    }
               }
               request.post(opt, (err, response, body) => {
                    const $ = cheerio.load(body)
                    const result = {
                         result: $('div.btn-group > a').attr('href')
                    }
                    resolve(result)
               })
          } catch (error) {
               reject(error)
          }
     })
}

function iphone(path_file) {
     return new Promise((resolve, reject) => {
          try {
               const img = fs.readFileSync(path_file)
               const buff = Buffer.from(img).toString('base64')
               const opt = {
                    headers: {
                         'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    jar: true,
                    method: 'POST',
                    url: baseUrl + path[14],
                    form: {
                         'image_0': buff,
                         'login': 'OK'
                    }
               }
               request.post(opt, (err, response, body) => {
                    const $ = cheerio.load(body)
                    const result = {
                         result: $('div.btn-group > a').attr('href')
                    }
                    resolve(result)
               })
          } catch (error) {
               reject(error)
          }
     })
}

function brokeCard(path_file) {
     return new Promise((resolve, reject) => {
          try {
               const img = fs.readFileSync(path_file)
               const buff = Buffer.from(img).toString('base64')
               const opt = {
                    headers: {
                         'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    jar: true,
                    method: 'POST',
                    url: baseUrl + path[15],
                    form: {
                         'image_1': buff,
                         'login': 'OK'
                    }
               }
               request.post(opt, (err, response, body) => {
                    const $ = cheerio.load(body)
                    const result = {
                         result: $('div.btn-group > a').attr('href')
                    }
                    resolve(result)
               })
          } catch (error) {
               reject(error)
          }
     })
}

function shadow(text_1) {
     return new Promise((resolve, reject) => {
          try {
               const opt = {
                    headers: {
                         'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    jar: true,
                    method: 'POST',
                    url: baseUrl + path[16],
                    form: {
                         'text_1': text_1,
                         'login': 'OK'
                    }
               }
               request.post(opt, (err, response, body) => {
                    const $ = cheerio.load(body)
                    const result = {
                         result: $('div.btn-group > a').attr('href')
                    }
                    resolve(result)
               })
          } catch (error) {
               reject(error)
          }
     })
}

function beachFrame(path_file) {
     return new Promise((resolve, reject) => {
          try {
               const img = fs.readFileSync(path_file)
               const buff = Buffer.from(img).toString('base64')
               const opt = {
                    headers: {
                         'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    jar: true,
                    method: 'POST',
                    url: baseUrl + path[17],
                    form: {
                         'image_0': buff,
                         'login': 'OK'
                    }
               }
               request.post(opt, (err, response, body) => {
                    const $ = cheerio.load(body)
                    const result = {
                         result: $('div.btn-group > a').attr('href')
                    }
                    resolve(result)
               })
          } catch (error) {
               reject(error)
          }
     })
}

function summerFrame(path_file) {
     return new Promise((resolve, reject) => {
          try {
               const img = fs.readFileSync(path_file)
               const buff = Buffer.from(img).toString('base64')
               const opt = {
                    headers: {
                         'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    jar: true,
                    method: 'POST',
                    url: baseUrl + path[18],
                    form: {
                         'image_0': buff,
                         'login': 'OK'
                    }
               }
               request.post(opt, (err, response, body) => {
                    const $ = cheerio.load(body)
                    const result = {
                         result: $('div.btn-group > a').attr('href')
                    }
                    resolve(result)
               })
          } catch (error) {
               reject(error)
          }
     })
}


function natureFrame(path_file) {
     return new Promise((resolve, reject) => {
          try {
               const img = fs.readFileSync(path_file)
               const buff = Buffer.from(img).toString('base64')
               const opt = {
                    headers: {
                         'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    jar: true,
                    method: 'POST',
                    url: baseUrl + path[19],
                    form: {
                         'image_1': buff,
                         'login': 'OK'
                    }
               }
               request.post(opt, (err, response, body) => {
                    const $ = cheerio.load(body)
                    const result = {
                         result: $('div.btn-group > a').attr('href')
                    }
                    resolve(result)
               })
          } catch (error) {
               reject(error)
          }
     })
}

function glitch(text_1, text_2) {
     return new Promise((resolve, reject) => {
          try {
               const opt = {
                    headers: {
                         'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    jar: true,
                    method: 'POST',
                    url: baseUrl + path[20],
                    form: {
                         'text_1': text_1,
                         'text_2': text_2,
                         'login': 'OK'
                    }
               }
               request.post(opt, (err, response, body) => {
                    const $ = cheerio.load(body)
                    const result = {
                         result: $('div.btn-group > a').attr('href')
                    }
                    resolve(result)
               })
          } catch (error) {
               reject(error)
          }
     })
}

function rain(path_file) {
     return new Promise((resolve, reject) => {
          try {
               const img = fs.readFileSync(path_file)
               const buff = Buffer.from(img).toString('base64')
               const opt = {
                    headers: {
                         'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    jar: true,
                    method: 'POST',
                    url: baseUrl + path[21],
                    form: {
                         'image_0': buff,
                         'login': 'OK'
                    }
               }
               request.post(opt, (err, response, body) => {
                    const $ = cheerio.load(body)
                    const result = {
                         result: $('div.btn-group > a').attr('href')
                    }
                    resolve(result)
               })
          } catch (error) {
               reject(error)
          }
     })
}


function sea(text_1) {
     return new Promise((resolve, reject) => {
          try {
               const opt = {
                    headers: {
                         'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    jar: true,
                    method: 'POST',
                    url: baseUrl + path[22],
                    form: {
                         'text_1': text_1,
                         'login': 'OK'
                    }
               }
               request.post(opt, (err, response, body) => {
                    const $ = cheerio.load(body)
                    const result = {
                         result: $('div.btn-group > a').attr('href')
                    }
                    resolve(result)
               })
          } catch (error) {
               reject(error)
          }
     })
}


function neon(text_1) {
     return new Promise((resolve, reject) => {
          try {
               const opt = {
                    headers: {
                         'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    jar: true,
                    method: 'POST',
                    url: baseUrl + path[23],
                    form: {
                         'text_0': text_1,
                         'login': 'OK'
                    }
               }
               request.post(opt, (err, response, body) => {
                    const $ = cheerio.load(body)
                    const result = {
                         result: $('div.btn-group > a').attr('href')
                    }
                    resolve(result)
               })
          } catch (error) {
               reject(error)
          }
     })
}


function stars(text_1) {
     return new Promise((resolve, reject) => {
          try {
               const opt = {
                    headers: {
                         'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    jar: true,
                    method: 'POST',
                    url: baseUrl + path[24],
                    form: {
                         'text_1': text_1,
                         'login': 'OK'
                    }
               }
               request.post(opt, (err, response, body) => {
                    const $ = cheerio.load(body)
                    const result = {
                         result: $('div.btn-group > a').attr('href')
                    }
                    resolve(result)
               })
          } catch (error) {
               reject(error)
          }
     })
}


function wood(text_1) {
     return new Promise((resolve, reject) => {
          try {
               const opt = {
                    headers: {
                         'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    jar: true,
                    method: 'POST',
                    url: baseUrl + path[25],
                    form: {
                         'text_1': text_1,
                         'login': 'OK'
                    }
               }
               request.post(opt, (err, response, body) => {
                    const $ = cheerio.load(body)
                    const result = {
                         result: $('div.btn-group > a').attr('href')
                    }
                    resolve(result)
               })
          } catch (error) {
               reject(error)
          }
     })
}


function darklogo(text) {
     return new Promise((resolve, reject) => {
          try {
               const opt = {
                    headers: {
                         'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    jar: true,
                    method: 'POST',
                    url: baseUrl + path[26],
                    form: {
                         'optionNumber_0': (Math.floor(Math.random() * 30)).toString(),
                         'text_2': text,
                         'login': 'OK'
                    }
               }
               request.post(opt, (err, response, body) => {
                    const $ = cheerio.load(body)
                    const result = {
                         result: $('div.btn-group > a').attr('href')
                    }
                    resolve(result)
               })
          } catch (error) {
               reject(error)
          }
     })
}


function nightsea(path_file) {
     return new Promise((resolve, reject) => {
          try {
               const img = fs.readFileSync(path_file)
               const buff = Buffer.from(img).toString('base64')
               const opt = {
                    headers: {
                         'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    jar: true,
                    method: 'POST',
                    url: baseUrl + path[27],
                    form: {
                         'image_0': buff,
                         'login': 'OK'
                    }
               }
               request.post(opt, (err, response, body) => {
                    const $ = cheerio.load(body)
                    const result = {
                         result: $('div.btn-group > a').attr('href')
                    }
                    resolve(result)
               })
          } catch (error) {
               reject(error)
          }
     })
}


function photoglitch(path_file) {
     return new Promise((resolve, reject) => {
          try {
               const img = fs.readFileSync(path_file)
               const buff = Buffer.from(img).toString('base64')
               const opt = {
                    headers: {
                         'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    jar: true,
                    method: 'POST',
                    url: baseUrl + path[28],
                    form: {
                         'image_0': buff,
                         'login': 'OK'
                    }
               }
               request.post(opt, (err, response, body) => {
                    const $ = cheerio.load(body)
                    const result = {
                         result: $('div.btn-group > a').attr('href')
                    }
                    resolve(result)
               })
          } catch (error) {
               reject(error)
          }
     })
}



function anaglyph(path_file) {
     return new Promise((resolve, reject) => {
          try {
               const img = fs.readFileSync(path_file)
               const buff = Buffer.from(img).toString('base64')
               const opt = {
                    headers: {
                         'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    jar: true,
                    method: 'POST',
                    url: baseUrl + path[29],
                    form: {
                         'image_0': buff,
                         'login': 'OK'
                    }
               }
               request.post(opt, (err, response, body) => {
                    const $ = cheerio.load(body)
                    const result = {
                         result: $('div.btn-group > a').attr('href')
                    }
                    resolve(result)
               })
          } catch (error) {
               reject(error)
          }
     })
}


function balloon(path_file) {
     return new Promise((resolve, reject) => {
          try {
               const img = fs.readFileSync(path_file)
               const buff = Buffer.from(img).toString('base64')
               const opt = {
                    headers: {
                         'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    jar: true,
                    method: 'POST',
                    url: baseUrl + path[30],
                    form: {
                         'image_0': buff,
                         'login': 'OK'
                    }
               }
               request.post(opt, (err, response, body) => {
                    const $ = cheerio.load(body)
                    const result = {
                         result: $('div.btn-group > a').attr('href')
                    }
                    resolve(result)
               })
          } catch (error) {
               reject(error)
          }
     })
}

function typographic(path_file) {
     return new Promise((resolve, reject) => {
          try {
               const img = fs.readFileSync(path_file)
               const buff = Buffer.from(img).toString('base64')
               const opt = {
                    headers: {
                         'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    jar: true,
                    method: 'POST',
                    url: baseUrl + path[31],
                    form: {
                         'image_0': buff,
                         'login': 'OK'
                    }
               }
               request.post(opt, (err, response, body) => {
                    const $ = cheerio.load(body)
                    const result = {
                         result: $('div.btn-group > a').attr('href')
                    }
                    resolve(result)
               })
          } catch (error) {
               reject(error)
          }
     })
}


function photosky(path_file) {
     return new Promise((resolve, reject) => {
          try {
               const img = fs.readFileSync(path_file)
               const buff = Buffer.from(img).toString('base64')
               const opt = {
                    headers: {
                         'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    jar: true,
                    method: 'POST',
                    url: baseUrl + path[32],
                    form: {
                         'image_1': buff,
                         'login': 'OK'
                    }
               }
               request.post(opt, (err, response, body) => {
                    const $ = cheerio.load(body)
                    const result = {
                         result: $('div.btn-group > a').attr('href')
                    }
                    resolve(result)
               })
          } catch (error) {
               reject(error)
          }
     })
}


function wanted(path_file, name, price) {
     return new Promise((resolve, reject) => {
          try {
               const img = fs.readFileSync(path_file)
               const buff = Buffer.from(img).toString('base64')
               const opt = {
                    headers: {
                         'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    jar: true,
                    method: 'POST',
                    url: baseUrl + path[33],
                    form: {
                         'image_1': buff,
                         'text_3': name,
                         'text_4': price,
                         'login': 'OK'
                    }
               }
               request.post(opt, (err, response, body) => {
                    const $ = cheerio.load(body)
                    const result = {
                         result: $('div.btn-group > a').attr('href')
                    }
                    resolve(result)
               })
          } catch (error) {
               reject(error)
          }
     })
}


function fireworkvideo(path_file) {
     return new Promise((resolve, reject) => {
          try {
               const img = fs.readFileSync(path_file)
               const buff = Buffer.from(img).toString('base64')
               const opt = {
                    headers: {
                         'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    jar: true,
                    method: 'POST',
                    url: baseUrl + path[34],
                    form: {
                         'image_0': buff,
                         'login': 'OK'
                    }
               }
               request.post(opt, (err, response, body) => {
                    const $ = cheerio.load(body)
                    const result = {
                         result: $('div.btn-group > a').attr('href')
                    }
                    resolve(result)
               })
          } catch (error) {
               reject(error)
          }
     })
}


function cooldesign(text) {
     return new Promise((resolve, reject) => {
          try {
               const opt = {
                    headers: {
                         'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    jar: true,
                    method: 'POST',
                    url: baseUrl + path[35],
                    form: {
                         'optionNumber_0': '0',
                         'text_1': text,
                         'login': 'OK'
                    }
               }
               request.post(opt, (err, response, body) => {
                    const $ = cheerio.load(body)
                    const result = {
                         result: $('div.btn-group > a').attr('href')
                    }
                    resolve(result)
               })
          } catch (error) {
               reject(error)
          }

     })
}


function colorfuldesign(text) {
     return new Promise((resolve, reject) => {
          try {
               const opt = {
                    headers: {
                         'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    jar: true,
                    method: 'POST',
                    url: baseUrl + path[35],
                    form: {
                         'optionNumber_0': '3',
                         'text_1': text,
                         'login': 'OK'
                    }
               }
               request.post(opt, (err, response, body) => {
                    const $ = cheerio.load(body)
                    const result = {
                         result: $('div.btn-group > a').attr('href')
                    }
                    resolve(result)
               })
          } catch (error) {
               reject(error)
          }

     })
}


function armydesign(text) {
     return new Promise((resolve, reject) => {
          try {
               const opt = {
                    headers: {
                         'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    jar: true,
                    method: 'POST',
                    url: baseUrl + path[35],
                    form: {
                         'optionNumber_0': '4',
                         'text_1': text,
                         'login': 'OK'
                    }
               }
               request.post(opt, (err, response, body) => {
                    const $ = cheerio.load(body)
                    const result = {
                         result: $('div.btn-group > a').attr('href')
                    }
                    resolve(result)
               })
          } catch (error) {
               reject(error)
          }

     })
}

// brokeCard('C:/Users/user/Downloads/GITHUB_PROFILE.jpg')
// iphone('C:/Users/user/Downloads/GITHUB_PROFILE.jpg')
// underwater('C:/Users/user/Downloads/GITHUB_PROFILE.jpg')
// drawing('../beleis/img.jpeg')
// burningFire('../beleis/img.jpeg')
// semok('Heyhey notbad')
// harryPotter('Tukang kurupuk')
// horrorHouse('Perkemahan anak-anak')
// coffee('Nice Monday')
// battlefield('MrHrTz', 'DGC Bots')
// googleKeyword('Saya', 'pingin kamu', 'Hah? udin?')
// gunBanner('MRHRTZ', 'merhabot', '../beleis/img.jpeg')
// gtaV('../beleis/img.jpeg')
// dota('Mynaeme', 3)
// shadow('MRHRTZ')
// beachFrame('C:/Users/user/Downloads/GITHUB_PROFILE.jpg')
// summerFrame('C:/Users/user/Downloads/GITHUB_PROFILE.jpg')
// natureFrame('C:/Users/user/Downloads/GITHUB_PROFILE.jpg')
glitch('Hei','Kmo')
// rain('C:/Users/user/Downloads/GITHUB_PROFILE.jpg')
// sea('alo')
// neon('MRHRTZ')
// stars('MRHRTZ')
// wood('MRHRTZ')
// darklogo('MRHRTZ')
// nightsea('C:/Users/user/Downloads/GITHUB_PROFILE.jpg')
// photoglitch('C:/Users/user/Downloads/GITHUB_PROFILE.jpg')
// anaglyph('C:/Users/user/Downloads/GITHUB_PROFILE.jpg')
// balloon('C:/Users/user/Downloads/GITHUB_PROFILE.jpg')
// typographic('C:/Users/user/Downloads/GITHUB_PROFILE.jpg')
// photosky('C:/Users/user/Downloads/GITHUB_PROFILE.jpg')
// wanted('C:/Users/user/Downloads/GITHUB_PROFILE.jpg', 'Ara', 'Rp2000')
// fireworkvideo('C:/Users/user/Downloads/GITHUB_PROFILE.jpg')
// cooldesign('Ni Bagus Juga') //mp4
// colorfuldesign('Ni Bagus Juga') //mp4
// armydesign('Ni Bagus Juga') //mp4
     .then(console.log)
     .catch(console.log)


// const util = require('util');

// function Foo() {}
// const Bar = () => {};
// const hi = 'd'

// console.log(typeof hi + hi.replace(/./g,'s'))
// // Returns: true



