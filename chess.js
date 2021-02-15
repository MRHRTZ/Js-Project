const { Chess } = require('chess.js')
const chess = new Chess()
const fs = require('fs')
let json = JSON.parse(fs.readFileSync('./chess.json'))

const from = 'd7'
const to = 'd6'

const obj = {
     "turn": "black",
     "enemy": {
          "black": {
               "name": "",
               "number": ""
          },
          "white": {
               "name": "",
               "number": ""
          }
     },
     "board": []
}

if (json.board.length == 0) {
     json.board = [chess.pgn()]
     fs.writeFileSync('./chess.json', JSON.stringify(json, null, 2))
     console.log(json.turn)
     const out = chess.ascii()
     console.log(out)
} else {
     console.log(json.turn)
     if (json.turn == 'white') {
          chess.load_pgn(json.board.join('\n'))
          chess.move({ from: from, to: to })
          if (json.board.length === chess.pgn().length) return console.log('No Move')
          json.board = [chess.pgn()]
          json.turn = 'black'
          fs.writeFileSync('./chess.json', JSON.stringify(json, null, 2))
          const out = chess.ascii()
          console.log(out)
     } else if (json.turn == 'black') {
          chess.load_pgn(json.board.join('\n'))
          chess.move({ from: from, to: to })
          if (json.board.length === chess.pgn().length) return console.log('No Move')
          json.board = [chess.pgn()]
          json.turn = 'white'
          fs.writeFileSync('./chess.json', JSON.stringify(json, null, 2))
          const out = chess.ascii()
          console.log(out)
     }
}
