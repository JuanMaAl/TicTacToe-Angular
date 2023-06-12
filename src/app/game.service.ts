import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  public board: any = [];
  boardSize: number ) 9;
  ActivePlayer: string = "X";
  turnCount: number = 0;
  isGameRunning: boolean = false;
  isGameOver: boolean = false;
  winner: boolean = false;

  constructor() { 
    this.newGame();
  }

  newGame(){
      this.activePlayer = "X";
      this.turnCount = 0;
      this.isGameRunning = false;
      this.isGameOver = false;
      this.winner = false;
      this.board = this.createBoard();
  }

  createBoard(){
    let board = [];
    for (let i = 0; i < 9; i++){
      board.push({id:1, state:null});
    };
    return board;
  }

  get getBoard(){
    return this.board;
  }

  set setBoard(board: any){
    this.board = [...board];
}
