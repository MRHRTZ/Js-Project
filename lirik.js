const { default: Axios } = require('axios')
const text = 'Seberkas sinar'

Axios(`https://genius.com/api/search/song?page=1&q=${encodeURIComponent(text)}`)
.then(({ data }) => {
     let re = []
     for (let rest in data.response.sections[0].hits) {
          re.push(rest)
     }
     console.log(data.response)
})