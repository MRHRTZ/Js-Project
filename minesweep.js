const { Grid } = require('minesweeperjs')
const fs = require('fs')
const emoji = require('node-emoji')
const metaboard = JSON.parse(fs.readFileSync('./minesweep.json'))

function reset() {
     var g = new Grid({ width: 10, height: 10, name: "Standart grid", nbbombs: 10 })
          .initMap()
          .spawnBombs(0, 0)
          .show(true)
     fs.writeFileSync('./minesweep.json', JSON.stringify(g, null, 2))
}


function reveal(db, IndeXeks, IndeXye) {
     const { x, y } = { y: IndeXeks, x: IndeXye }
     if (x >= db.height) return 'Data x terlalu besar!'
     if (y >= db.width) return 'Data y terlalu besar!'
     if (db.map[x][y].isRevealed || db.map[x][y].isFlagged) return 'Sel tersebut telah terisi!';
     let { nb } = db.map[x][y]
     if (db.map[x][y].isBomb) {
          if (db.lives < 1) {
               db.isWon = false
               db.isEnded = true
          } else {
               db.lives--
          }
     } else {
          db.revealedCells++
          db.map[x][y].isRevealed = true
     }

     if (nb == 0) {
          if (x > 0)
               reveal(db, x - 1, y)
          if (y > 0)
               reveal(db, x, y - 1)
          if (x < db.width - 1)
               reveal(db, x + 1, y)
          if (y < db.height - 1)
               reveal(db, x, y + 1)
     }

     let str = ''
     let output = []
     metaboard.map.forEach(line => {
          line.forEach(c => {
               if (c.isRevealed) {
                    output.push(c.isRevealed ? "-" : (c.isFlagged ? "*" : " "))
                    str += c.isRevealed ? "-" : (c.isFlagged ? "*" : " ")
               }
               str += c.isBomb ? "x " : c.nb + " "
               output.push(c.isBomb ? output[Math.floor(Math.random(output.length + 1))] + " " : c.nb + " ")  //random or gameover

          })
          str += "\n"
     })

     fs.writeFileSync('./minesweep.json', JSON.stringify(db, null, 2))

     str = str.replace(/-0/g, emoji.emojify(':zero:'))
     str = str.replace(/-1/g, emoji.emojify(':one:'))
     str = str.replace(/-2/g, emoji.emojify(':two:'))
     str = str.replace(/-3/g, emoji.emojify(':three:'))
     str = str.replace(/-4/g, emoji.emojify(':four:'))
     str = str.replace(/-5/g, emoji.emojify(':five:'))
     str = str.replace(/-6/g, emoji.emojify(':six:'))
     str = str.replace(/-7/g, emoji.emojify(':seven:'))
     str = str.replace(/-8/g, emoji.emojify(':eight:'))
     str = str.replace(/-9/g, emoji.emojify(':nine:'))
     str = str.replace(/-x /g, emoji.emojify(':no_entry:'))

     if (db.revealedCells >= db.width * db.height - db.nbbombs) {
          db.isWon = true
          db.isEnded = true
     }

     if (db.isEnded && !db.isWon) {
          str = str.replace(/x /g, emoji.emojify(':x:'))
     } else if (db.isEnded && db.isWon) {
          str = str.replace(/x /g, emoji.emojify(':negative_squared_cross_mark:'))
          return { status: 'win', grid: str }
     }
     fs.writeFileSync('./minesweep.json', JSON.stringify(metaboard, null, 2))
     str = str.replace(/[0-9] |x /g, emoji.emojify(':white_large_square:'))
     return metaboard.isEnded ? { status: 'gameover', grid: str } : { status: 'playing', grid: str }
}

// reset()
console.log(reveal(metaboard, 4, 0))
// console.log()