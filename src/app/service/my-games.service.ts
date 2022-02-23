import { Injectable } from '@angular/core';
import { Game } from '../components/games/games.component';

@Injectable({
  providedIn: 'root'
})
export class MyGamesService {

 

createGame(gameNumber:number) {
      let genres  = ['indie','action','adventure'];
      let title = `Game ${gameNumber}`;
      let price = Math.floor(Math.random() * (999 - 99) + 99);
      let description = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore nesciunt assumenda aliquid autem ducimus saepe consequatur iste rem necessitatibus praesentium.'
      let genre = genres[Math.floor(Math.random() * 3)];
      let isInLibrary = false;
      return new Game(title,price,description,genre,isInLibrary);
    }
  
    myGames:Game[]=[];

  constructor() { }
}
