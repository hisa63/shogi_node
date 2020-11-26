import {Player} from './player.model'
import {Board} from './board.model'

export class Game {
  board: Board

  constructor () {
    this.board = new Board()     
  }

  public initGame () {
    const player1 = new Player(true)
    const player2 = new Player(false)

    this.board.player1 = player1
    this.board.player2 = player2

    this.board.initBoard()
  }

  public print() {
    this.board.print()
  }
}