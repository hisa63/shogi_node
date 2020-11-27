import {BasePieceClass} from './basePiece.model'

export class Gin extends BasePieceClass {
  public printPiece () {
    return '銀'
  }

  public canMoveToWithoutObstical () {
    return [
      [-1, -1], [-1, 0], [-1, 1],
      [1, -1], [1, 1]
    ]
  }
}