import {BasePieceClass} from './basePiece.model'

export class Kaku extends BasePieceClass {
  public printPiece () {
    return '角'
  }

  public canMoveToWithoutObstical () { 
    return [
      [1, 1],[2, 2],[3, 3],[4, 4],[5, 5],[6, 6],[7, 7],[8, 8],
      [1, -1],[2, -2],[3, -3],[4, -4],[5, -5],[6, -6],[7, -7],[8, -8],
      [-1, 1],[-2, 2],[-3, 3],[-4, 4],[-5, 5],[-6, 6],[-7, 7],[-8, 8],
      [-1, -1],[-2, -2],[-3, -3],[-4, -4],[-5, -5],[-6, -6],[-7, -7],[-8, -8]
    ]
  }
}