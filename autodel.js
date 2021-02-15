// const wiki = require('wikipedia')
// const util = require('util')


// wiki.summary('covid').then((res) => {
//     console.log(res)
//     const changedLang = wiki.setLang('fr')
//     console.log(changedLang)
// })

const moment = require('moment')
const cek = moment() //.tz("Asia/Jakarta")

function countDownDays(timestamp) {
    const detik_m = cek.format('ss')
    const menit_m = cek.format('mm')
    const jam_m = cek.format('hh')
    const hari_m = cek.format('D')
    const bulan_m = cek.format('M')
    const bulan_nama = cek.subtract(1, "month").startOf("month").format('MMMM').slice(0, 3)
    const tahun_m = cek.format('YYYY')
    const format_skrng = new Date()
    const countDown = new Date(timestamp)
    countDown.setDate(countDown.getDate())
    const timeleft = countDown - format_skrng
    const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    const patok = 'Waktu Habis!'
    if (timeleft < 0) return patok
    // const waktu_tersisa = `${days} Hari, ${hours}:${minutes}:${seconds}`
    const dalam_jam = `${hours}:${minutes}:${seconds}`
    return dalam_jam
}



const wakt = countDownDays('12-12-2020 16:56')
console.log(wakt)

// switch (key) {
//     case switch_pref+'deantilink':
//             if (!isGroupAdmins) return hurtz.reply(from, 'Maaf, perintah ini hanya dapat dilakukan oleh admin grup!', id)
//             let antliu = JSON.parse(fs.readFileSync('./lib/antilink.json'))
//             if (isLinkOn) {
//                 let index = antliu.indexOf(chat.id);
//                 antliu.splice(index, 1)
//                 fs.writeFileSync('./lib/antilink.json', JSON.stringify(antliu, null, 2))
//                 hurtz.reply(from, `❌ Fitur antilink dinonaktifkan!`, id) 
//             } else {
//                 hurtz.reply(from, '⚠️ Fitur antilink memang belum diaktifkan!', id)
//             }
//             await hurtz.sendSeen(from)
//             break
//         case switch_pref+'antilink':
//             if (!isGroupAdmins) return hurtz.reply(from, 'Maaf, perintah ini hanya dapat dilakukan oleh admin grup!', id)
//             let antli = JSON.parse(fs.readFileSync('./lib/antilink.json'))
//             if (isLinkOn) {
//                 hurtz.reply(from, '⚠️ Fitur antilink telah diaktifkan sebelumnya pada grup ini! apabila ingin menonaktifkannya ketik *!deantilink*')
//             } else {
//                 antli.push(chat.id)
//                 fs.writeFileSync('./lib/antilink.json', JSON.stringify(antli, null, 2))
//                 hurtz.reply(from, `✅ Antilink telah diaktifkan! ketik *!deantilink* untuk mematikannya.`, id)
//             }
//             await hurtz.sendSeen(from)
//             break
// }


// function numFormatter(num) {
//     if(num > 999 && num < 1000000){
//         return (num/1000).toFixed(0) + 'K'; // convert to K for number from > 1000 < 1 million 
//     }else if(num > 1000000){
//         return (num/1000000).toFixed(0) + 'M'; // convert to M for number from > 1 million 
//     }else if(num < 900){
//         return num; // if value < 1000, nothing to do
//     }
// }

// console.log(numFormatter(20000))