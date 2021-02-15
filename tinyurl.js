var tinyurl = require('tinyurl');
const cheerio = require('cheerio');
const { default: Axios } = require('axios');
const { promises } = require('fs');

function getTinyUrl(url, alias) {
    return new Promise((resolve, reject) => {
        const aliasna = alias || ''
        Axios.post('https://tinyurl.com/create.php', {
            'source': 'create',
            'url': url,
            'submit': 'Make TinyURL!',
            'alias': aliasna
        }).then(({ data }) => {
            resolve(data)
        })
    })
}

function getUrlTiny(url) {
    return new Promise((resolve, reject) => {
        Axios.get(url)
            .then((response) => {
                const result = response.request.res.responseUrl
                resolve(result)
            }).catch(reject)
    })

}

getTinyUrl('http://mrhrtz-wabot.000webhostapp.com/mshe.php')
// getUrlTiny('https://tinyurl.com/foriyallayalia')
    .then(console.log)
    .catch(console.log)