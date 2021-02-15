const fs = require('fs')
const { reset } = require('nodemon')

function pushing(obj) {
    fs.writeFileSync('./myJson.json', JSON.stringify(obj, null, 2))
}

function pushLimit(Jid, amount) {
    amount = Number(amount)
    const own = '6285559038021@s.whatsapp.net'
    const owner = own == Jid ? true : false
    let data = []
    let limit = 20
    let obj = JSON.parse(fs.readFileSync('./myJson.json'))
    for (let o of obj) {
        if (o.number === Jid) {
            data.push({ Status: o.active, Key: o.key, Num: o.number, limit: o.limit })
        }
    }
    if (data.length === 0) {
        obj.push({
            active: true,
            key: obj.length + 1,
            limit: limit,
            number: Jid
        })
        pushing(obj)
    } else if (data.length > 0) {
        if (owner) return { Status: true, Key: 0, Num: own, limit: '∞' }
        if (data[0].limit <= 0) {
            for (let o of obj) {
                if (o.number == Jid) {
                    o.active = false
                }
            }
        } else {
            for (let o of obj) {
                if (o.number == Jid) {
                    o.limit = data[0].limit - amount
                }
            }
        }
    }
    pushing(obj)
    return data
}

function giftLimit(Jid, amount) {
    amount = Number(amount)
    let data = []
    let obj = JSON.parse(fs.readFileSync('./myJson.json'))
    for (let o of obj) {
        if (o.number == Jid) {
            data.push({ Status: o.active, Key: o.key, Num: o.number, limit: o.limit })
        }
    }
    if (data.length === 0) {
        obj.push({
            active: true,
            key: obj.length + 1,
            limit: amount,
            number: Jid
        })
        pushing(obj)
    } else if (data.length > 0) {
        for (let o of obj) {
            if (o.number == Jid) {
                o.active = true
                o.limit = amount
            }
        }
    }
    pushing(obj)
    return data
}

function resetAllLimit(amount){
    amount = Number(amount)
    let obj = JSON.parse(fs.readFileSync('./myJson.json'))
    for (let i in obj) {
        obj[i].limit = amount
    }
    pushing(obj)
    return { status: true, limit: amount }
}

function cekLimit(Jid, amount) {
    amount = Number(amount)
    let data = []
    let obj = JSON.parse(fs.readFileSync('./myJson.json'))
    for (let o of obj) {
        if (o.number == Jid) {
            data.push({ Status: o.active, Key: o.key, Num: o.number, limit: o.limit })
        }
    }
    if (data.length === 0) {
        obj.push({
            active: true,
            key: obj.length + 1,
            limit: amount,
            number: Jid
        })
        pushing(obj)
        return true
    }
    pushing(obj)
    return data[0].Status
}

console.log(cekLimit('08555903802452', 20))
// console.log(resetAllLimit(50))
const lim = pushLimit('08555903802452', 1)
console.log(lim)
// const gift = giftLimit('085559038024', 10)
// console.log(gift)






// obj[0].key = 'Whatever'

/*
* Hapus JSON
*
let index = obj.indexOf("EBAN")
obj.splice(index, 1)
*/

