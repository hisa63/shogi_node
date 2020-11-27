import {Player} from '../player.model'
import {Board} from '../board.model'
import { runInThisContext } from 'vm';

export class BasePieceClass {
  player: Player;
  currentPosition: number[];
  board: Board

  constructor (player: Player, currentPosition: number[], board: Board) {
    this.player = player
    this.currentPosition = currentPosition
    this.board = board
    this.board.positions[currentPosition[0]][currentPosition[1]] = this
  }

  moveTo(position: number[]): number {
    if (this.movableTo(position) === 1) {
      return 1 // '将棋盤のエリア内で指定してください'
    } else if (this.movableTo(position) === 2) {
      return 2 //  '選択中の駒では移動できない場所です'
    } else if (this.movableTo(position) === 3) {
      return 3 // '進路に障害物があります'
    } else if (this.movableTo(position) === 4) {
      return 4 // '指定場所に自身の駒がいます'
    }
    // set null to my current location (元々いた場所をnullにする)
    this.board.positions[this.currentPosition[0]][this.currentPosition[1]] = null
    
    // set new location of the board and the piece (新しく配置したpositionにpieceの情報を与える)
    if (!(this.board.positions[position[0]][position[1]] === null )) {
      const targetPiece = this.board.positions[position[0]][position[1]] as BasePieceClass
      // console.log('before-------\n', targetPiece)
      if (this.player.isFirstMove) {
        targetPiece.player = this.player // why?
        // targetPiece.player.isFirstMove = true  //why?
        targetPiece.currentPosition = [9, 9] //[9, 9] player1 inActive 保管場所
      } else {
        targetPiece.player = this.player  // why?
        // targetPiece.player.isFirstMove = false // why?
        targetPiece.currentPosition = [10, 10] //[10, 10] player2 inActive 保管場所
      }
      // console.log('after-------\n', targetPiece)
    }
    this.board.positions[position[0]][position[1]] = this
    this.currentPosition = position
    if ((this.board.pieces[35].currentPosition[0] === 9) && (this.board.pieces[35].currentPosition[1] === 9)) {
      return 9
    } else if ((this.board.pieces[4].currentPosition[0] === 10) && (this.board.pieces[4].currentPosition[1] === 10)) {
      return 10
    }
    // remove the enemy piece if killed (相手のコマを奪った場合、そのコマをinActiveにする)
    return 0
  }

  movableTo(position: number[]): number {
    let isMove = true
    let errorNumber = 0
    // can I move to the new position? (指定のpositionに移動できるか？) 

    // is the new position within the shogi board? (指定場所は将棋盤の中で指定されているか？)
    for (let i = 0; i < this.board.baseBoardPosition.length; i++) {
      if ((position[0] == this.board.baseBoardPosition[i][0]) && (position[1] == this.board.baseBoardPosition[i][1])) {
        isMove = true
        break;
      } else {
        isMove = false
      }
    }
    if (!(isMove)) {
      errorNumber = 1
      return errorNumber // throw new Error('将棋盤のエリア内で指定してください')
    }
    // is the location included in canMoveToWithoutObstical? (指定場所は移動可能エリアに含まれているか？)  
    let canMoveTo: number[];

    for (let i = 0; i < this.canMoveToWithoutObstical().length; i++) {
      if (this.player.isFirstMove === true) {
        canMoveTo = [this.currentPosition[0] + this.canMoveToWithoutObstical()[i][0],
          this.currentPosition[1] + this.canMoveToWithoutObstical()[i][1]]
      } else {
        canMoveTo = [this.currentPosition[0] - this.canMoveToWithoutObstical()[i][0],
          this.currentPosition[1] + this.canMoveToWithoutObstical()[i][1]]
      }
      if ((position[0] == canMoveTo[0]) && (position[1] == canMoveTo[1])) {
        isMove = true
        break;
      } else {
        isMove = false
      }
    }

    if (!(isMove)) {
      errorNumber = 2
      return errorNumber // throw new Error('選択中の駒では移動できない場所です')
    }
    // is there any obsticals between current position and the new position (移動する間に障害物はないか？)
    let moveDirection: number[]
    let sumY: number
    let sumX: number
    let absoluteY: number
    let absoluteX: number
    // let distance: number 

    sumY = position[0] - this.currentPosition[0]
    sumX = position[1] - this.currentPosition[1]
    absoluteY = Math.abs(sumY)
    absoluteX = Math.abs(sumX)
    moveDirection = [position[0] - this.currentPosition[0], position[1] - this.currentPosition[1]]
    // distance = Math.sqrt(sumY ** 2 + sumX ** 2) 
    // moveDirection[0] /= distance
    // moveDirection[1] /= distance
    if (moveDirection[0] != 0) {
      moveDirection[0] /= absoluteY
    }
    if (moveDirection[1] != 0) {
      moveDirection[1] /= absoluteX
    }
    if(!(this.checkObsticalBetween(moveDirection, position))) {
      errorNumber = 3
      return errorNumber // throw new Error('進路に障害物があります')
    }

    // is the destination null or enemy? (目的地はnullか敵ですか？)
    if (!(this.board.positions[position[0]][position[1]] == null)) {
      const piece = this.board.positions[position[0]][position[1]] as BasePieceClass        
      if (piece.player.isFirstMove === this.player.isFirstMove) {
        isMove = false
      } else {
        isMove = true
      }
    }
    if (!isMove) { 
      errorNumber = 4
      return errorNumber // throw new Error('指定場所に自身の駒がいます')
    }
    return errorNumber
  }

  printPiece (): string {
    return ''
  }

  canMoveToWithoutObstical (): number[][] { return [] }

  checkObsticalBetween(moveDirection: number[], position: number[]): boolean {
    let positionY = this.currentPosition[0]
    let positionX = this.currentPosition[1]
    let checkPosition = [positionY, positionX]

    if ((moveDirection[0] == 0) && (moveDirection[1] == 1)) { // 飛 x方向（右）
      for (let i = checkPosition[1] + 1; i < position[1]; i++) {
        checkPosition[1] += 1;
        if(!(this.board.positions[checkPosition[0]][checkPosition[1]] == null)) { //pieceが存在するなら
          return false
        }
      }
    } else if ((moveDirection[0] == 0) && (moveDirection[1] == -1)) { // 飛 -x方向（左）
      for (let i = checkPosition[1] - 1; i > position[1]; i--) {
        checkPosition[1] -= 1;
        if(!(this.board.positions[checkPosition[0]][checkPosition[1]] == null)) { //pieceが存在するなら
          return false
        }
      }
    } else if ((moveDirection[0] == -1) && (moveDirection[1] == 0)) { // 飛 y方向（下）
      for (let i = checkPosition[0] - 1; i > position[0]; i--) {
        checkPosition[0] -= 1;
        if(!(this.board.positions[checkPosition[0]][checkPosition[1]] == null)) { //pieceが存在するなら
          return false
        }
      }
    } else if ((moveDirection[0] == 1) && (moveDirection[1] == 0)) { // 飛 -y方向(上)
      for (let i = checkPosition[0] + 1; i < position[0]; i++) {
        checkPosition[0] += 1;
        if(!(this.board.positions[checkPosition[0]][checkPosition[1]] == null)) { //pieceが存在するなら
          return false
        }
      }
      /////////////////////   ここから角    //////////////////////
    } else if ((moveDirection[0] == -1) && (moveDirection[1] == 1)) { // 角 (右上)
      for (let i = checkPosition[1] + 1; i < position[1]; i++) {  // currentPieceのxがpositionのxまで（x == yなのでxのみで考える）
        checkPosition[0] -= 1
        checkPosition[1] += 1
        if(!(this.board.positions[checkPosition[0]][checkPosition[1]] == null)) { //pieceが存在するなら
          return false
        }
      }
    } else if ((moveDirection[0] == 1) && (moveDirection[1] == 1)) { // 角（右下）
      for (let i = checkPosition[1] + 1; i < position[1]; i++) {  // currentPieceのxがpositionのxまで（x == yなのでxのみで考える）
        checkPosition[0] += 1
        checkPosition[1] += 1
        if(!(this.board.positions[checkPosition[0]][checkPosition[1]] == null)) { //pieceが存在するなら
          return false
        }
      }
    } else if ((moveDirection[0] == -1) && (moveDirection[1] == -1)) { // 角（左上）
      for (let i = checkPosition[1] - 1; i > position[1]; i--) {  // currentPieceのxがpositionのxまで（x == yなのでxのみで考える）
        checkPosition[0] -= 1
        checkPosition[1] -= 1
        if(!(this.board.positions[checkPosition[0]][checkPosition[1]] == null)) { //pieceが存在するなら
          return false
        }
      }
    }
    else if ((moveDirection[0] == 1) && (moveDirection[1] == -1)) { // 角（左下）
      for (let i = checkPosition[1] - 1; i > position[1]; i--) {  // currentPieceのxがpositionのxまで（x == yなのでxのみで考える）
        checkPosition[0] += 1
        checkPosition[1] -= 1
        if(!(this.board.positions[checkPosition[0]][checkPosition[1]] == null)) { //pieceが存在するなら
          return false
        }
      }
    }
    return true
  }
}

// --------------------------------------- 以下、関係なし ---------------------------------------------

// export interface BasePiece {
//   printPiece (): string;
//   canMoveToWithoutObstical (): number[][]
// }
// export interface BasePiece {
//   printNumber (): number
// }

// class Animal {
//   name: string;
//   old: number;

//   constructor(name: string, old: number) {
//     this.name = name; //thisはclass Animal,this.nameはclass Animalのname: stringをスコープ, nameはcostructorの引数name: stringをスコープ
//     this.old = old;
//   }

//   showName() {
//     console.log(this.name)
//   }
//   showOld() {
//     console.log(this.old)
//   }
// }

// export default Animal

  // -------------------------------------------------------------------------------------------------
  // moveTo(position: number[]): void {
  //   if (!this.movableTo(position)) throw new Error('you cannot move to that position')
    
  //   // set null to my current location (元々いた場所をnullにする)
  //   this.board.positions[this.currentPosition[0]][this.currentPosition[1]] = null
    
  //   // set new location of the board and the piece (新しく配置したpositionにpieceの情報を与える)
  //   this.board.positions[position[0]][position[1]] = this
  //   this.currentPosition = position
  //   // remove the enemy piece if killed (相手のコマを奪った場合、そのコマをinActiveにする)
  // }

  // movableTo(position: number[]): boolean {
  //   let isMove = true
  //   // can I move to the new position? (指定のpositionに移動できるか？) 

  //   // is the new position within the shogi board? (指定場所は将棋盤の中で指定されているか？)
  //   for (let i = 0; i < this.board.baseBoardPosition.length; i++) {
  //     if ((position[0] == this.board.baseBoardPosition[i][0]) && (position[1] == this.board.baseBoardPosition[i][1])) {
  //       isMove = true
  //       break;
  //     } else {
  //       isMove = false
  //     }
  //   }
  //   if (!(isMove)) {
  //     throw new Error('将棋盤のエリア内で指定してください')
  //     return false
  //   }
  //   // is the location included in canMoveToWithoutObstical? (指定場所は移動可能エリアに含まれているか？)  
  //   let canMoveTo: number[];

  //   for (let i = 0; i < this.canMoveToWithoutObstical().length; i++) {
  //     canMoveTo = [this.currentPosition[0] + this.canMoveToWithoutObstical()[i][0],
  //       this.currentPosition[1] + this.canMoveToWithoutObstical()[i][1]]
  //     if ((position[0] == canMoveTo[0]) && (position[1] == canMoveTo[1])) {
  //       isMove = true
  //       break;
  //     } else {
  //       isMove = false
  //     }
  //   }

  //   if (!(isMove)) {
  //     throw new Error('選択中の駒では移動できない場所です')
  //     return false
  //   }
  //   // is there any obsticals between current position and the new position (移動する間に障害物はないか？)
  //   let moveDirection: number[]
  //   let sumY: number
  //   let sumX: number
  //   let absoluteY: number
  //   let absoluteX: number
  //   // let distance: number 

  //   sumY = position[0] - this.currentPosition[0]
  //   sumX = position[1] - this.currentPosition[1]
  //   absoluteY = Math.abs(sumY)
  //   absoluteX = Math.abs(sumX)
  //   moveDirection = [position[0] - this.currentPosition[0], position[1] - this.currentPosition[1]]
  //   // distance = Math.sqrt(sumY ** 2 + sumX ** 2) 
  //   // moveDirection[0] /= distance
  //   // moveDirection[1] /= distance
  //   if (moveDirection[0] != 0) {
  //     moveDirection[0] /= absoluteY
  //   }
  //   if (moveDirection[1] != 0) {
  //     moveDirection[1] /= absoluteX
  //   }
  //   if(!(this.checkObsticalBetween(moveDirection, position))) {
  //     throw new Error('進路に障害物があります')
  //     return false
  //   }

  //   // is the destination null or enemy? (目的地はnullか敵ですか？)
  //   if (!(this.board.positions[position[0]][position[1]] == null)) {
  //     const piece = this.board.positions[position[0]][position[1]] as BasePieceClass        
  //     if (piece.player.isFirstMove === this.player.isFirstMove) {
  //       isMove = false
  //     } else {
  //       isMove = true
  //     }
  //   }
  //   if (!isMove) { throw new Error('指定場所に自身の駒がいます') }
  //   return isMove
  // }
