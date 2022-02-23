import { Pipe, PipeTransform } from '@angular/core';
import { Game } from '../components/games/games.component';

@Pipe({
  name: 'gamesSearch'
})
export class GamesSearchPipe implements PipeTransform {

  transform( games:Game[], searchStr: string) {
    if(games.length ===0 || searchStr ==='') {
      return games;
    }

    games = games.filter((game)=>game.title.toLowerCase().indexOf(searchStr.toLowerCase())!== -1);
    return games;
  }
}
