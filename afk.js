var CreateMYSQL = mysql.createConnection({
    host: "127.0.0.1", 
    user: "root", 
    password: "", 
    database: "wabot_db", 
    charset: 'utf8mb4'
});


if(isGroupMsg) {
    CreateMYSQL.query("SELECT * FROM `afk`", async function (err, result) {
        if(err) console.log(err)
        if(result.length !== 0){
            try{
                result.map(async x => {
                    const tanda = '```' 
                    if(x.nomer == message.author.split('@')[0] && x.groupid == message.from.split('-')[1].split('@')[0]){ 
                        if(message.body && message.body.toLowerCase().startsWith('!afk')){
                        } else {
                            CreateMYSQL.query(
                            'DELETE FROM `afk` WHERE `nomer` = ? AND `groupid` = ?', [x.nomer,x.groupid],
                            async function (err, result) {
                                if(err) console.log(err)
                                await hurtz.sendTextWithMentions(message.from, `@${message.author.split('@')[0]} Sekarang tidak AFK!`)
                            })
                        }
                    }else
                    if(x.reason == 'null'){
                        if(message.type == 'chat'){
                            if(message.body.includes(x.nomer) && message.from.split('-')[1].split('@')[0].includes(x.groupid)){
                                var duration = moment.duration(moment(x.time).diff(moment()))
                                const hours = duration.hours()
                                const minute = duration.minutes()
                                const second = duration.seconds()
                                const day = duration.days()       
                                await hurtz.sendTextWithMentions(message.from, `@${x.nomer} sedang AFK!\nSejak ${tanda}${day}d: ${hours}h: ${minute}m: ${second}s:${tanda} yang lalu.`)
                                await hurtz.sendText(x.nomer+'@c.us', `Karena anda sedang offline, teman anda mengirimkan pesan.\n\nGrup = ${x.nama}\nNomor = ${message.author.split('@')[0]}\nPesan = ${message.body.replace(`@${x.nomer}`, `@Tag`)}`)
                            }
                        } else if(message.type == 'image'){
                            if(typeof message.caption !== 'undefined' && message.caption.includes(x.nomer) && message.from.split('-')[1].split('@')[0].includes(x.groupid)){
                                var duration = moment.duration(moment(x.time).diff(moment()))
                                const hours = duration.hours()
                                const minute = duration.minutes()
                                const second = duration.seconds()
                                const day = duration.days()   
                                await hurtz.sendTextWithMentions(message.from, `@${x.nomer} sedang AFK!\nSejak ${tanda}${day}d: ${hours}h: ${minute}m: ${second}s:${tanda} yang lalu.`)
                                //const generatedUa = await hurtz.getGeneratedUserAgent();
                                const mediaData = await decryptMedia(message);
                                const imageBase64 = `data:${message.mimetype};base64,${mediaData.toString(
                                'base64'
                                )}`;
                                const filename = `${message.t}.${mime.extension(message.mimetype)}`;
                                await hurtz.sendText(x.nomer+'@c.us', `Karena anda sedang offline, teman anda mengirimkan pesan.`)
                                await hurtz.sendImage(x.nomer+'@c.us', imageBase64, filename, `GRUP = ${x.nama}\nNOMER = ${message.author.split('@')[0]}\nPESAN = ${message.caption.replace(`@${x.nomer}`, `@TAG`)}`)
                            }   
                        } else if(message.type == 'video'){
                            if(typeof message.caption !== 'undefined' && message.caption.includes(x.nomer) && message.from.split('-')[1].split('@')[0].includes(x.groupid)){
                                var duration = moment.duration(moment(x.time).diff(moment()))
                                const hours = duration.hours()
                                const minute = duration.minutes()
                                const second = duration.seconds()
                                const day = duration.days()   
                                await hurtz.sendText(message.from, `@${x.nomer} sedang AFK!\nSejak ${tanda}${day}d: ${hours}h: ${minute}m: ${second}s:${tanda} yang lalu.`)
                                //const generatedUa = await hurtz.getGeneratedUserAgent();
                                const mediaData = await decryptMedia(message);
                                const imageBase64 = `data:${message.mimetype};base64,${mediaData.toString(
                                'base64'
                                )}`;
                                const filename = `${message.t}.${mime.extension(message.mimetype)}`;
                                await hurtz.sendText(x.nomer+'@c.us', `Karena anda sedang offline, teman anda mengirimkan pesan.`)
                                await hurtz.sendImage(x.nomer+'@c.us', imageBase64, filename, `GRUP = ${x.nama}\nNOMER = ${message.author.split('@')[0]}\nPESAN = ${message.caption.replace(`@${x.nomer}`, `@TAG`)}`)
                            }   
                        }
                    }else if(x.reason !== 'null'){
                        if(message.type == 'chat'){
                            if( message.body.includes(x.nomer) && message.from.split('-')[1].split('@')[0].includes(x.groupid)){
                                var duration = moment.duration(moment(x.time).diff(moment()))
                                const hours = duration.hours()
                                const minute = duration.minutes()
                                const second = duration.seconds()
                                const day = duration.days()   
                                await hurtz.sendTextWithMentions(message.from, `@${x.nomer} sedang AFK!\nSejak ${tanda}${day}d: ${hours}h: ${minute}m: ${second}s:${tanda} yang lalu.\nReason : ${x.reason}`)
                                await hurtz.sendText(x.nomer+'@c.us', `Karena anda sedang ${x.reason}, teman anda mengirimkan pesan.\n\nGRUP = ${x.nama}\nNOMER = ${message.author.split('@')[0]}\nPESAN = ${message.body.replace(`@${x.nomer}`, `@TAG`)}`)
                            }
                        }else if(message.type == 'image'){
                            if(typeof message.caption !== 'undefined' && message.caption.includes(x.nomer) && message.from.split('-')[1].split('@')[0].includes(x.groupid)){
                                var duration = moment.duration(moment(x.time).diff(moment()))
                                const hours = duration.hours()
                                const minute = duration.minutes()
                                const second = duration.seconds()
                                const day = duration.days()   
                                await hurtz.sendTextWithMentions(message.from, `@${x.nomer} sedang AFK!\nSejak ${tanda}${day}d: ${hours}h: ${minute}m: ${second}s:${tanda} yang lalu.\nReason : ${x.reason}`)
                                //const generatedUa = await hurtz.getGeneratedUserAgent();
                                const mediaData = await decryptMedia(message);
                                const imageBase64 = `data:${message.mimetype};base64,${mediaData.toString(
                                'base64'
                                )}`;
                                const filename = `${message.t}.${mime.extension(message.mimetype)}`;
                                await hurtz.sendText(x.nomer+'@c.us', `Karena anda sedang ${x.reason}, teman anda mengirimkan pesan.`)
                                await hurtz.sendImage(x.nomer+'@c.us', imageBase64, filename, `GRUP = ${x.nama}\nNOMER = ${message.author.split('@')[0]}\nPESAN = ${message.caption.replace(`@${x.nomer}`, `@TAG`)}`)
                            }   
                        }  else if(message.type == 'video'){
                            if(typeof message.caption !== 'undefined' && message.caption.includes(x.nomer) && message.from.split('-')[1].split('@')[0].includes(x.groupid)){
                                var duration = moment.duration(moment(x.time).diff(moment()))
                                const hours = duration.hours()
                                const minute = duration.minutes()
                                const second = duration.seconds()
                                const day = duration.days()   
                                await hurtz.sendText(message.from, `@${x.nomer} sedang AFK!\nSejak ${tanda}${day}d: ${hours}h: ${minute}m: ${second}s:${tanda} yang lalu.\nReason : ${x.reason}`)
                                //const generatedUa = await hurtz.getGeneratedUserAgent();
                                const mediaData = await decryptMedia(message);
                                const imageBase64 = `data:${message.mimetype};base64,${mediaData.toString(
                                'base64'
                                )}`;
                                const filename = `${message.t}.${mime.extension(message.mimetype)}`;
                                await hurtz.sendText(x.nomer+'@c.us', `Karena anda sedang ${x.reason}, teman anda mengirimkan pesan.`)
                                await hurtz.sendImage(x.nomer+'@c.us', imageBase64, filename, `GRUP = ${x.nama}\nNOMER = ${message.author.split('@')[0]}\nPESAN = ${message.caption.replace(`@${x.nomer}`, `@TAG`)}`)
                            }   
                        }  
                    } 
                }) 
            } catch(err){
                console.log(err)
            }
        }
    })      
}



switch (key) {
    case '!afk':
    if(isGroupMsg) {
        CreateMYSQL.query(
            "SELECT 1 FROM `afk` WHERE `nomer` = ? AND `groupid` = ?",[author.split('@')[0], from.split('-')[1].split('@')[0]],
            async function (err, result) {
                if(err) console.log(err)
                if(result.length == 0) {
                    const mmk = body.slice(5)
                    if(body.toLowerCase() == '!afk') {
                        CreateMYSQL.query(
                            'INSERT INTO `afk` SET ?', {nomer: author.split('@')[0],groupid: from.split('-')[1].split('@')[0], nama: message.chat.contact.name, reason: 'null', time: moment().format('YYYY-MM-DD HH:mm:ss')},
                            async function (err, result) {
                                if(err) console.log(err)
                                await hurtz.sendTextWithMentions(from, `@${author.split('@')[0]} Sekarang AFK!`, id)
                            })
                    } else {
                        CreateMYSQL.query(
                            'INSERT INTO `afk` SET ?', {nomer: author.split('@')[0],groupid: from.split('-')[1].split('@')[0], nama: message.chat.contact.name, reason: mmk, time: moment().format('YYYY-MM-DD HH:mm:ss')},
                            async function (err, result) {
                                if(err) console.log(err)
                                await hurtz.sendTextWithMentions(from, `@${author.split('@')[0]} Sekarang AFK!`, id)
                            })
                    } 
                }else{
                    const mmk = body.slice(5)
                    if(body.toLowerCase() == '!afk') {
                        CreateMYSQL.query(
                            'UPDATE `afk` SET ? WHERE `nomer` = ? AND `groupid` = ?', [{reason: 'null',time: moment().format('YYYY-MM-DD HH:mm:ss')}, author.split('@')[0],from.split('-')[1].split('@')[0]],
                            async function (err, result) {
                                if(err) console.log(err)
                                await hurtz.sendTextWithMentions(from, `@${author.split('@')[0]} Sekarang AFK!!`, id)
                            })
                    }else{
                        CreateMYSQL.query(
                            'UPDATE `afk` SET ? WHERE `nomer` = ? AND `groupid` = ?', [{reason: mmk, time: moment().format('YYYY-MM-DD HH:mm:ss')}, author.split('@')[0],from.split('-')[1].split('@')[0]],
                            async function (err, result) {
                                if(err) console.log(err)
                                await hurtz.sendTextWithMentions(from, `@${message.author.split('@')[0]} Sekarang AFK Anjay!`, id)
                        })
                    }  
                }
            })
    }else{
        await hurtz.reply(from, `Hanya bisa digunakan digrup!.`, id)
    } 
    break;
}