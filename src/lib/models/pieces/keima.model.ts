import {BasePieceClass} from './basePiece.model'

export class Keima extends BasePieceClass {
  public printPiece () {
    return '桂'
  }

  public canMoveToWithoutObstical () {
    return [[-1, 2], [1, 2]]
  }
}