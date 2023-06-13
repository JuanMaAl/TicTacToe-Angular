import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  public board: any = [];
  boardSize: number = 9;
  activePlayer: string = "X";
  turnCount: number = 0;
  isGameRunning: boolean = false;
  isGameOver: boolean = false;
  winner: boolean = false;

  constructor() { 
    this.newGame();
  }//fin constructor

  newGame(){
      this.activePlayer = "X";
      this.turnCount = 0;
      this.isGameRunning = false;
      this.isGameOver = false;
      this.winner = false;
      this.board = this.createBoard();
  }//fin newGame

  createBoard(){
    let board = [];
    for (let i = 0; i < 9; i++){
      board.push({id:1, state:null});
    };//fin for
    return board;
  }//fin createBoard

  get getBoard(){
    return this.board;
  }//fin getBoard

  set setBoard(board: any){
    this.board = [...board];
}//fin setBoard

changePlayerTurn(squareCliked: any){
  this.updateBoard(squareCliked);
  if(!this.isGameOver) this.activePlayer = this.activePlayer === "X" ? "O" : "X";
  this.turnCount++;
  this.isGameOver = this.isGameOver ? true : false;
}//fin changePlayerTurn

updateBoard(squareClicked: any){
  this.board[squareClicked.id].state = squareClicked.state;
  if(this.winner){
    this.winner = true;
    this.isGameOver = false;
    this.isGameOver = true;
  }//fin if
}//fin updateBoard

get isWinner():boolean{
  return this.checkDiag() || this.checkRows(this.board, "row") || this.checkRows(this.board, "col") ? true : false;

}//fin is Winner

checkRows (board: any, mode:any){
  const
    ROW = mode === "row" ? true : false,
    DIST = ROW ? 1 : 3,
    NUMTIMES = ROW ? 7 : 3;

    for (let i = 0; i < NUMTIMES; i += INC){
      let 
        firstSquare = board[i].state,
        secondSquare = board[i + DIST].state,
        thirdSquare = board[i + DIST * 2].state;

        if(firstSquare && secondSquare && thirdSquare){
          if(firstSquare === secondSquare && secondSquare === thirdSquare) return true;
        } //fin if
    }//fin for
    return false;
}//fin checkRows

checkDiag() {
  const timesRun = 2,
    midSquare = this.board[4].state;

    for (let i = 0; i <= timesRun; i += 2){
      let
        UpperCorner = this.board[i].state,
        lowerCorner = this.board[8 - i].state;

        if (midSquare && upperCorner && LowerCorner)
          if (midSquare === UpperCorner && UpperCorner === lowerCorner) return true;
    }//fin for
    return false;
}//fin checkDiag

}//fin class GameService