const { default: Axios } = require('axios');
const cheerio = require('cheerio')
const fs = require('fs')
const puppeteer = require('puppeteer');


(async() => {
    const browser = await puppeteer.launch({
        headless: false,
        //executablePath: 'C://Program Files//Google//Chrome//Application//chrome.exe'
    });
    const page = await browser.newPage();
    const q = 'apa itu dpr';
    await page.goto(`https://brainly.co.id/app/ask?&q=${q}`,{
        waitUntil: 'networkidle0',
    })
    await page.waitForSelector('a.sg-text')
    const bodyHandle = await page.$('body');
    const data = await page.evaluate(body => body.innerHTML, bodyHandle);
    await bodyHandle.dispose();
    // fs.writeFileSync('./datachord.html', data)
    const $ = cheerio.load(data)
    let url = []
    let title = []
    $('div > a.sg-text.sg-text--small.sg-text--link.sg-text--bold.sg-text--blue-dark').get().map((rest) => {
        url.push($(rest).attr('href'))
    })
    $('div > div > div.sg-text.sg-text--default.sg-text--break-words').get().map((rest) => {
        title.push($(rest).text())
    })
    console.log({ title: title, url: url })
    await browser.close();
})

const url = 'https://brainly.co.id/tugas/8332275'
Axios.get(url)
.then(({ data }) => {
    let answer = []
    const $ = cheerio.load(data)
    $('div[data-test="answer-box-text"]').get().map((rest) => {
        answer.push($(rest).text().replace('\n',''))
    })
    let media = [] 
    let media_question = []
    $('div[data-test="question-box-attachments"] > div > div > div > img.brn-qpage-next-attachments-viewer-image-preview__image').get().map((rest) => {
        if ($(rest).length) {
            media_question.push($(rest).attr('src'))
        }
    })
    $('div[data-test="answer-box-attachments"] > div > div > div > img.brn-qpage-next-attachments-viewer-image-preview__image').get().map((rest) => {
        if ($(rest).length) {
            media.push($(rest).attr('src'))
        }
    })
    const time = $('div.sg-text.sg-text--xsmall.sg-text--gray-secondary > time').attr('datetime')
    const mapel = $('a[data-test="question-box-subject"]').text().replace(/\n/g,'')
    const kelas = $('a[data-test="question-box-grade"]').text().replace(/\n/g,'')
    const pertanyaan = $('h1[data-test="question-box-text"] > span').text().replace('\n','')
    let jawaban = []
    for (let i = 0; i < answer.length; i++) {
        jawaban.push({
            teks: answer[i],
            media: media[i] || []
        })        
    }
    const result = { 
        pertanyaan: pertanyaan,
        foto_pertanyaan: media_question,
        waktu_dibuat: time,
        kelas: kelas,
        mapel: mapel,
        jawaban: jawaban
    }
    console.log(result)
})