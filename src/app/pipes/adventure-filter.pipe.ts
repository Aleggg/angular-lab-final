import { Pipe, PipeTransform } from '@angular/core';
import { Game } from '../components/games/games.component';

@Pipe({
  name: 'adventureFilter'
})
export class AdventureFilterPipe implements PipeTransform {

  transform(games:Game[], genreChecked:boolean) {
    if(genreChecked){
      games = games.filter(game => game.genre ==='adventure');
      return games;
    }
    return games;
  }

}
