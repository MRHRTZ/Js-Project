const { default: Axios } = require("axios");
const qs = require('querystring')
const cheerio = require('cheerio')

function text2image(text, size) {
     return new Promise((resolve, reject) => {
          let fonts = ['times', 'arial', 'verdana', 'comic', 'cour']
          Axios({
               method: 'POST',
               url: 'https://text2image.com/api.php',
               data: { "action": "genImage", "text": text, "font": fonts[Math.floor(Math.random() * fonts.length)], "fontSize": size, "width": "150", "height": "150", "forecolor": "#FFFFFF", "backcolor": "#000000", "valign": "centre", "format": "3", "token": "0f0f7a9bb752c5b9684229cd69029e7c1c82d327e53874c5e8d335392147f462" },
               headers: {
                    Cookie: 'SESSIONID=6e9a064e54575ec36c9c8f764aa7d7; PHPSESSID=89e3d6c0ef248b67ad93deee714e7d',
                    'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
               }
          })
               .then(({ data }) => {
                    resolve({ result: 'https://text2image.com' + data.image })
               })
     })
}
//convert cek.png -fuzz 30% -fill none -draw "alpha 0,0 replace" result.png
const query = 'Testing gimana caranya biar ditengah aksbndiuasblisbzilsbaLIU asoef iusef iuasef oaiw hoiaw'
text2image(query, query.length < 8 ? '50' : query.length >= 8 && query.length < 40 ? '20' :  '12' )
.then(console.log)
.catch(console.log)

