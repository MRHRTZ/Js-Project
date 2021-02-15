const { default: Axios } = require('axios')
const cheerio = require('cheerio')
const fs = require('fs')


function searchLineSticker(query) {
     return new Promise((resolve, reject) => {
          Axios.request({
               url: 'https://store.line.me/search/id?q=' + query,
               method: 'get',
               headers: {
                    Cookies: 'uu=b1WTj6v25XycORW8AAbn5l1o3p1oFK4IdSTgN6PUlgRHpNnaA5B92AZcK2voKHbo; fs=%7B%221%22%3A%7B%22impressed%22%3Afalse%7D%2C%222%22%3A%7B%22impressed%22%3Afalse%7D%2C%223%22%3A%7B%22impressed%22%3Afalse%7D%2C%224%22%3A%7B%22impressed%22%3Afalse%7D%7D; _ga=GA1.2.1178183582.1607484022; _trmccid=8efd163d8815b247; _ga=GA1.3.1178183582.1607484022; XSRF-TOKEN=57bd64c7-6a65-492b-8185-da991a4a321f; display_lang=id; ss=RCVSTjEPJwWR5RZ5n1ksm2gks527xxnxQOGHHx5XS9PG6905D2Lr4SfCqdUObFUqHJ8rUUpGZKnu1BSN16nxGYqwZeRUrNQXMwHS:164862:176e41e63da; _trmcdisabled2=-1; _trmcuser={"id":"","attr1":"4g","attr2":"PC","attr3":false,"attr4":false}; _gid=GA1.2.2024142913.1610144970; _gid=GA1.3.2024142913.1610144970; _trmcsession={"id":"9bfc398d1a8637f6","path":"/search/id","query":"?q=minecraft","params":{},"time":1610149248526}; _trmcpage=/search/id; __try__=1610149660198; _gat_UA-51908971-1=1; '
               }
          })
          .then(({ data }) => {
               fs.writeFileSync('./datachord.html', data)
               const $ = cheerio.load(data)
               console.log(data)
          }).catch(reject)
     })
}

searchLineSticker('pokemon')