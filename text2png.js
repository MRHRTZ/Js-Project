const text2png = require('text2png')
const fs = require('fs')

fs.writeFileSync('outt.png', text2png('Ohayoo~', { 
    font: '50px sans-serif',
    strokeWidth: 10,
    strokeColor: 'black',
    lineSpacing: 10,
    padding: 20,
    color: 'white'
}))