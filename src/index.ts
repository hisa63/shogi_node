import { Game } from './lib/models/game.model'
import { BasePieceClass } from './lib/models/pieces/basePiece.model'

const game = new Game()
game.initGame()

let isGame = true
let myTurn: number //  1:player1, -1:player2
let turn = 1
let gameChecker = 0
while (isGame) { // どちらかの王がinActiveになるまで
  game.print()
  
  myTurn = turn % 2
  if (myTurn === 0) {
    console.log('Turn :', turn + '   ( ---  player2  --- )')
  } else {
    console.log('Turn :', turn + '   ( ---  player1  --- )')
  }
  const prompt = require('prompt-sync')();
  const n = prompt('どのコマを動かしますか？ ex) pieceNumber yPosition xPosition: ') as string;
  const words = n.split(' ')
  if (words.length === 3) {
    const pieceNumber = Number(words[0])
    const xNumber = Number(words[1])
    const yNumber = Number(words[2])
    if ((game.board.pieces[pieceNumber].player.isFirstMove) && (myTurn !== 0) ||
      (!game.board.pieces[pieceNumber].player.isFirstMove) && (myTurn === 0)) {
      gameChecker = game.board.pieces[pieceNumber].moveTo([xNumber, yNumber])
      if (gameChecker === 1) {  
        console.log('')
        console.log('****************************************************************')
        console.log('error : ----- 将棋盤のエリア内で指定してください -----')
      } else if (gameChecker === 2) {
        console.log('')
        console.log('****************************************************************')
        console.log('error : ----- 選択中の駒では移動できない場所です -----')
      } else if (gameChecker === 3) {
        console.log('')
        console.log('****************************************************************')
        console.log('error : ----- 進路に障害物があります ------')
      } else if (gameChecker === 4) {
        console.log('')
        console.log('****************************************************************')
        console.log('error : ----- 指定場所に自身の駒がいます -----')
      } else if (gameChecker === 9) { //player2 Ouを失ったら
        isGame = false
        console.log('')
        console.log('****************************************************************')
        console.log('')
        console.log('')
        console.log('')
        console.log('------   win : player1   -----')
        console.log('')
        console.log('')
      } else if (gameChecker === 10) {  //player1 Ouを失ったら
        isGame = false
        console.log('')
        console.log('****************************************************************')
        console.log('')
        console.log('')
        console.log('')
        console.log('------   win : player2   -----')
        console.log('')
        console.log('')
      } else {
        turn++;
      }
    } else {
      console.log('')
      console.log('****************************************************************')
      console.log('指定された駒は相手プレイヤーの駒です')
    }
  } else {
    console.log('')
    console.log('****************************************************************')
    console.log('error : 値を正しく入力してください')
  }
  console.log('****************************************************************')
}

//------------------------------以下、関係なし------------------------------
// const array = [1,2,3,4]
// for (const element of array) {
//   console.log(element)
// }

// async function main() {
//   const persons: any[] = [
//     {name: 'Yusuke', age: 35},
//     {name: 'Hisayuki', age: 25},
//     {name: 'Ken', age: 25}
//   ]

  // "Yusuke, Hisayuki"
  // let output = ''
  // for (let i = 0; i < persons.length; i++) {
  //   output += persons[i].name
  //   if (i < persons.length - 1) {
  //     output += ', '
  //   }
  // }
  // console.log(output)

  // const names = []
  // for (let i = 0; i < persons.length; i++) { 
  //   names.push(persons[i].name)
  // }
  // console.log(names.join(', '))

  // const names = persons.map(person => person.name)
  // console.log(names.join(', '))

  // console.log(persons)
  
  
  // const array = [1, 2, 3, 4]



  // for (const element of array) {
  //   await slowFunction() 
  //   console.log(element)
  // }

  // array.forEach(async (element) => {
  //   console.log(element)
  // })



// }

// function slowFunction() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve()
//     }, 1000)
//   })
// }


// main()


// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// readline.question('What is your name? ', (answer: number | string) => {
//   // console.log(`Hello, ${answer}!`);
//   console.log(answer)
//   let sum = answer
//   if (sum == 1) {
//     console.log('right!')
//     // game.board.pieces[18].moveTo([5, 7])
//     // console.log(game.board.pieces[18])
//   }
//   readline.close();
// });
