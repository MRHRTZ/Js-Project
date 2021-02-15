const gis = require('g-i-s')

async function ImageSearch(query) {
    return new Promise((resolve, reject) => {
        gis(query, logResults)
        function logResults(error, results) {
            if (error) {
                reject(error)
            }
            else {
                let url = []
                for (let i = 0; i < results.length; i++) {
                    url.push(decodeURIComponent(JSON.parse(`"${results[i].url}"`)))
                }
                resolve(url)
            }
        }
    })
}


ImageSearch('ff').then(res => console.log(res))