const { createCanvas, loadImage } = require('canvas')
const canvas = createCanvas(200, 200)
const ctx = canvas.getContext('2d')
 
var imgd = ctx.getImageData(0, 0, imageWidth, imageHeight),
    pix = imgd.data;

for (var i = 0, n = pix.length; i <n; i += 4) {
    var r = pix[i],
        g = pix[i+1],
        b = pix[i+2];

    if(g > 150){ 
        // If the green component value is higher than 150
        // make the pixel transparent because i+3 is the alpha component
        // values 0-255 work, 255 is solid
        pix[i + 3] = 0;
    }
}

ctx.putImageData(imgd, 0, 0);​
 
// Draw cat with lime helmet
loadImage('examples/images/lime-cat.jpg').then((image) => {
  ctx.drawImage(image, 50, 0, 70, 70)
 
  console.log('<img src="' + canvas.toDataURL() + '" />')
})