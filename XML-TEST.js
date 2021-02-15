const { default: Axios } = require('axios')
const fs = require('fs')
const xml2js = require('xml2js')

Axios.get('https://data.bmkg.go.id/autogempa.xml')
.then(({ data }) => {
    xml2js.parseStringPromise(data).then((result) => {
        console.log(JSON.stringify(result))
    })
})