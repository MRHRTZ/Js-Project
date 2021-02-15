const ytdl = require('ytdl-core')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 7000;

// ytdl('https://www.youtube.com/watch?v=Kv3UfIZsS6A')
// .pipe(fs.createWriteStream('Vid_Crawling.mp4'))
// app.use('/api', router)
String.prototype.toReal = function () {
    var sec_num = parseInt(this, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours + ':' + minutes + ':' + seconds;
}


app.use('/ytdl/', (req, res) => {
    try {
    // let UrlYoutube = req.query.url.toString() 
    //ytdl.getVideoID(req.params.url)

    // let yat = ytdl.getInfo(UrlYoutube)
    let yat = ytdl.getInfo(`https://www.youtube.com/watch?v=${ ytdl.getVideoID(req.query.url.toString()) }`)
    .then((howly) => {

            
            let empefor = howly.formats
            let chose = '360p'
            let resultMp4 = []
            let resultMp3 = []
            
            for (let i = 0; i < empefor.length; i++) {
                // const quat = empefor[i].qualityLabel
                // let selector = quat == '720p' ? '720p' : quat == '480p' ? '480p' : quat == '360p' ? '360p' : '144p' 
                // console.log(selector)
                if (empefor[i].container == 'mp4' && empefor[i].hasVideo == true && empefor[i].hasAudio == true) {
                    // resulting.push(empefor[i].codecs)
                    // console.log(empefor[i])
                    let resultga = empefor[i]
                    resultMp4.push({
                        quality: resultga.qualityLabel,
                        url: resultga.url
                    })
                }

                if (empefor[i].mimeType == 'audio/webm; codecs=\"opus\"') {
                    let resultAud = empefor[i]
                    resultMp3.push({
                        audioQuality: resultAud.audioQuality,
                        audioBitrate: resultAud.audioBitrate,
                        url: resultAud.url
                    })
                }
            }

            const tamnel = howly.videoDetails.thumbnail.thumbnails

            res.send({
                status: "true",
                message: "See at my github https://github.com/MRHRTZ",
                title: howly.videoDetails.title,
                published: howly.videoDetails.publishDate,
                duration: howly.videoDetails.lengthSeconds.toReal(),
                desc: howly.videoDetails.description,
                author: howly.videoDetails.author,
                thumb: tamnel[tamnel.length - 1],
                video: resultMp4,
                audio: resultMp3,
                // all: howly
                
    
            })
        

        
    })
} catch (e) {
    res.send({
        status: "false",
        message: "See at my github https://github.com/MRHRTZ",
        todo: "Masukan parameter Url!",
        // result: e

    })
    console.log(e)
}
})


app.use('*', (req, res) => {
    res.status(404).json({
        status: "false",
        message: "Page Was Not Found"
    })
})

app.listen(PORT, () => {
    console.log("RUNNING ON PORT : " + PORT)
})
// let fotmat = ytdl.chooseFormat(yat.formats, { quality: '480' })