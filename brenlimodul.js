const text2image = require('text2image')
const fs = require('fs')
// const fonts = text2image.loadFont('../Futura-Bold-Italic-Regular.ttf', 'Futura', 'futura.ttf')
const font = text2image.loadFont('path/to/font.ttf', 'Britannic Bold', 'britannic-bold.ttf') // Font Glyphs Data
const text = 'Text TTP Okeh..'
// Font('path/to/font.ttf', 'Arial', 'arial.ttf')
text2image.convert(font, text, 0, 0, 512, {
    attr: 'fill="#fff"',
    align: 'center'
}).then((buffer) => {
    fs.writeFileSync('./ttpNew.png', buffer)
})