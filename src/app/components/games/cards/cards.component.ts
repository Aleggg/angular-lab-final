import { Component } from '@angular/core';

// export class Game{
//   title: string;
//   price: number;
//   description: string;
//   genre:string;
   
//   constructor(title: string, price: number, description:string, genre:string) {

//       this.title = title;
//       this.price = price;
//       this.description = description;
//       this.genre = genre;
//   }
// }


// const genres  = ['indie','action','adventure'];

// function createGames() {
//   let games = [];
//   for(let i=1; i <=50;i++){
//     let title = `Game ${i}`;
//     let price = Math.floor(Math.random() * (999 - 99) + 99);
//     let description = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore nesciunt assumenda aliquid autem ducimus saepe consequatur iste rem necessitatibus praesentium.'
//     let genre = genres[Math.random() * (3 - 1) + 1];
//     games.push(new Game(title,price,description,genre));
//   }
//   return games;
// }

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent  {

  //  games: Game[] = createGames();

}
