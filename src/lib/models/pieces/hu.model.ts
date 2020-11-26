import {BasePieceClass} from './basePiece.model'

export class Hu extends BasePieceClass {
  public printPiece () {
    return '歩'
  }

  public canMoveToWithoutObstical () {
    return [[-1, 0]]
  }
}