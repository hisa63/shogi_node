"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var game_model_1 = require("./lib/models/game.model");
var game = new game_model_1.Game();
game.initGame();
var turn = 1;
var errorChecker = 0;
while (1) { // どちらかの王がinActiveになるまで
    game.print();
    console.log('Turn :', turn);
    var prompt_1 = require('prompt-sync')();
    var n = prompt_1('どのコマを動かしますか？ ex) pieceNumber yPosition xPosition: ');
    var words = n.split(' ');
    if (words.length === 3) {
        var pieceNumber = Number(words[0]);
        var xNumber = Number(words[1]);
        var yNumber = Number(words[2]);
        errorChecker = game.board.pieces[pieceNumber].moveTo([xNumber, yNumber]);
        if (errorChecker === 1) {
            console.log('');
            console.log('****************************************************************');
            console.log('error : ----- 将棋盤のエリア内で指定してください -----');
        }
        else if (errorChecker === 2) {
            console.log('');
            console.log('****************************************************************');
            console.log('error : ----- 選択中の駒では移動できない場所です -----');
        }
        else if (errorChecker === 3) {
            console.log('');
            console.log('****************************************************************');
            console.log('error : ----- 進路に障害物があります ------');
        }
        else if (errorChecker === 4) {
            console.log('');
            console.log('****************************************************************');
            console.log('error : ----- 指定場所に自身の駒がいます -----');
        }
        else {
            turn++;
        }
    }
    else {
        console.log('');
        console.log('****************************************************************');
        console.log('error : 値を正しく入力してください');
    }
    console.log('****************************************************************');
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
//# sourceMappingURL=index.js.map