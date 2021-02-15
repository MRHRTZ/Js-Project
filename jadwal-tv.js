const cheerio = require('cheerio')
const { default: Axios } = require('axios')

try {
    let stasiun = [
        "rcti",
        "nettv",
        "antv",
        "gtv",
        "indosiar",
        "inewstv",
        "kompastv",
        "metrotv",
        "mnctv",
        "rtv",
        "sctv",
        "trans7",
        "transtv",
        "tvone",
        "tvri"
    ]
    const tv_switch = stasiun[0]
    Axios.get('https://www.jadwaltv.net/channel/' + tv_switch)
        .then(({ data }) => {
            const $ = cheerio.load(data)
            const isitable1 = []
            const isitable2 = []
            $('div > div > table:nth-child(3) > tbody > tr').each(function(i, result) {
                isitable1.push({
                    jam: result.children[0].children[0].data,
                    tayang: result.children[1].children[0].data
                })
            })
            // console.log(isitable1)
            $('div > div > table:nth-child(5) > tbody > tr').each(function(i, result) {
                isitable2.push({
                    jam: result.children[0].children[0].data,
                    tayang: result.children[1].children[0].data
                })
            })
            const semuatable = []

            for (let i = 0; i < isitable1.length; i++) {
                semuatable.push(isitable1[i])                    
            }
            for (let i = 0; i < isitable2.length; i++) {
                semuatable.push(isitable2[i])
            }
            // console.log(semuatable)


            console.log(semuatable)
        })
        .catch((e) => {
            console.log(e)
        })
} catch (e) {
    console.log(e)
}