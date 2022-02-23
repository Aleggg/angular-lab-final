import { Pipe, PipeTransform } from '@angular/core';
import { Game } from '../components/games/games.component';

@Pipe({
  name: 'indieFilter'
})
export class IndieFilterPipe implements PipeTransform {

  transform(games:Game[], genreChecked:boolean) {
    if(genreChecked){
      games = games.filter(game => game.genre ==='indie');
      return games;
    }
    return games;
  }

}
