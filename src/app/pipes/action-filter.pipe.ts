import { Pipe, PipeTransform } from '@angular/core';
import { Game } from '../components/games/games.component';

@Pipe({
  name: 'actionFilter'
})
export class ActionFilterPipe implements PipeTransform {

  transform(games:Game[], genreChecked:boolean) {
    if(genreChecked){
      games = games.filter(game => game.genre ==='action');
      return games;
    }
    return games;
  }

}
