const fetch = require('node-fetch')
const { JSDOM } = require('jsdom')
const cheerio = require('cheerio');
const { default: Axios } = require('axios');
const Formdata = require('form-data')

// Axios.interceptors.response.use(function (res) {
    // console.log(res)
// });

const bodieh = new Formdata()
bodieh.append('url', 'https://youtu.be/Fd_6Vw37cAV0')
bodieh.append('q_auto', '0')
bodieh.append('ajax', '0')
Axios({
    method: 'post',
    url: 'https://www.y2mate.com/mates/id4/analyze/ajax',
    data: bodieh,
    headers: {
        accept: '*/*',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'application/json;charset=UTF-8',
    }
}).then(({ data }) => {
    console.log(data)
})


const ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/


function post(url, formdata) {
    // console.log(Object.keys(formdata).map(key => `${key}=${encodeURIComponent(formdata[key])}`).join('&'))
    return fetch(url, {
        method: 'POST',
        headers: {
            accept: "*/*",
            'accept-language': "en-US,en;q=0.9",
            'content-type': "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: Object.keys(formdata).map(key => `${key}=${encodeURIComponent(formdata[key])}`).join('&')
    })
}

(async () => {
    const url = 'https://youtu.be/d_6Vw37cAV0'
    await post('https://www.y2mate.com/mates/en60/analyze/ajax', {
        url,
        q_auto: 0,
        ajax: 1
    }).then((data) => {
        const mine = data.json()
        mine.then(console.log)
    })
});


(async()=>{
    const url = 'https://www.y2mate.com/mates/en60/analyze/ajax'
    const helep = await fetch(url, {
        method: 'POST',
        headers: {
            accept: "*/*",
            'accept-language': "en-US,en;q=0.9",
            'content-type': "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: 'url=https%3A%2F%2Fyoutu.be%2Fd_6Vw37cAV0&q_auto=0&ajax=1'
    })
    const jsonna = await helep.json()
    const $ = cheerio.load(jsonna.result)   
    const java = $('script').get()[1].children[0].data
    const kid = /var k__id = "(.*?)"/.exec(java)[1]
    const vid = /var k_data_vid = "(.*?)"/.exec(java)
    console.log(vid)

})

function ytv(url) {
    return new Promise((resolve, reject) => {
        if (ytIdRegex.test(url)) {
            let ytId = ytIdRegex.exec(url)
            url = 'https://youtu.be/' + ytId[1]
            post('https://www.y2mate.com/mates/en60/analyze/ajax', {
                url,
                q_auto: 0,
                ajax: 1
            })
                .then(res => res.json()) //res.json()
                .then(res => {
                    console.log(res)
                    console.log('Scraping...')
                    document = (new JSDOM(res.result)).window.document
                    yaha = document.querySelectorAll('td')
                    filesize = yaha[yaha.length - 23].innerHTML
                    id = /var k__id = "(.*?)"/.exec(document.body.innerHTML) || ['', '']
                    thumb = document.querySelector('img').src
                    title = document.querySelector('b').innerHTML

                    post('https://www.y2mate.com/mates/en60/convert', {
                        type: 'youtube',
                        _id: id[1],
                        v_id: ytId[1],
                        ajax: '1',
                        token: '',
                        ftype: 'mp4',
                        fquality: 360
                    })
                        .then(res => res.json())
                        .then(res => {
                            let KB = parseFloat(filesize) * (1000 * /MB$/.test(filesize))
                            resolve({
                                dl_link: /<a.+?href="(.+?)"/.exec(res.result)[1],
                                thumb,
                                title,
                                filesizeF: filesize,
                                filesize: KB
                            })
                        }).catch(reject)
                }).catch(reject)
        } else reject('URL INVALID')
    })
}

function yta(url) {
    return new Promise((resolve, reject) => {
        if (ytIdRegex.test(url)) {
            let ytId = ytIdRegex.exec(url)
            url = 'https://youtu.be/' + ytId[1]
            post('https://www.y2mate.com/mates/en60/analyze/ajax', {
                url,
                q_auto: 0,
                ajax: 1
            })
                .then(res => res.json())
                .then(res => {
                    let document = (new JSDOM(res.result)).window.document
                    let type = document.querySelectorAll('td')
                    let filesize = type[type.length - 10].innerHTML
                    let id = /var k__id = "(.*?)"/.exec(document.body.innerHTML) || ['', '']
                    let thumb = document.querySelector('img').src
                    let title = document.querySelector('b').innerHTML

                    post('https://www.y2mate.com/mates/en60/convert', {
                        type: 'youtube',
                        _id: id[1],
                        v_id: ytId[1],
                        ajax: '1',
                        token: '',
                        ftype: 'mp3',
                        fquality: 128
                    })
                        .then(res => res.json())
                        .then(res => {
                            let KB = parseFloat(filesize) * (1000 * /MB$/.test(filesize))
                            resolve({
                                dl_link: /<a.+?href="(.+?)"/.exec(res.result)[1],
                                thumb,
                                title,
                                filesizeF: filesize,
                                filesize: KB
                            })
                        }).catch(reject)
                }).catch(reject)
        } else reject('URL INVALID')
    })
}


// ytv('https://www.youtube.com/watch?v=d_6Vw37cAV0')
// .then((hasil) => {
//     console.log(hasil)
// })


const hmtai = require("hmtai")
console.log(hmtai.nsfw)