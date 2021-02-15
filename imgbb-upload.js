const { exec } = require('child_process')

// const data = 'https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1506349856/750x500-ini-alasan-soekarno-tak-suka-musik-barat-masuk-indonesia-170704i-750x420_vv991h.jpg'
const data = 'https://im0-tub-com.yandex.net/i?id=9ba4a03d14c008f424020023231e4f9b&n=13'
//recognize

// exec(`curl -F "image=${data}" -H "api-key:c7e56944-336a-4bfe-ae81-bc579f4c7047" https://api.deepai.org/api/demographic-recognition`, (err, stdout, stderr) => {
//      console.log(stdout)
// })

//detect adult 

exec(`curl -F "image=${data}" -H "api-key:c7e56944-336a-4bfe-ae81-bc579f4c7047" https://api.deepai.org/api/content-moderation `, (err, stdout, stderr) => {
     console.log(stdout)
})

//Detect pose 

// exec(`curl -F "image=${data}" -H "api-key:c7e56944-336a-4bfe-ae81-bc579f4c7047" https://api.deepai.org/api/pose-detection`, (err, stdout, stderr) => {
//      console.log(stdout)
// })

//Cartoon 

// exec(`curl -F "image=${data}" -H "api-key:c7e56944-336a-4bfe-ae81-bc579f4c7047" https://api.deepai.org/api/toonify`, (err, stdout, stderr) => {
//      console.log(stdout)
// })

//Colorize black and white

// exec(`curl -F "image=${data}" -H "api-key:c7e56944-336a-4bfe-ae81-bc579f4c7047" https://api.deepai.org/api/colorizer `, (err, stdout, stderr) => {
//      console.log(stdout)
// })

// const text = "I have bad new"

//Detect feel

// exec(`curl -F "text=${text}" -H "api-key:c7e56944-336a-4bfe-ae81-bc579f4c7047" https://api.deepai.org/api/sentiment-analysis `, (err, stdout, stderr) => {
//      console.log(stdout)
// })

//Desc Image  


// exec(`curl -F "image=${data}" -H "api-key:c7e56944-336a-4bfe-ae81-bc579f4c7047" https://api.deepai.org/api/neuraltalk`, (err, stdout, stderr) => {
//      console.log(stdout)
// })