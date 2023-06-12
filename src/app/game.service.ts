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

}//fin class GameService