import { Component } from '@angular/core';
import { GameService } from './game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tic-tac-toe-angular';
  constructor (public gameService: GameService) { }
  
  resetGame(){
    this.gameService.newGame();
  }

}
