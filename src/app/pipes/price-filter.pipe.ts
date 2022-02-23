import { Pipe, PipeTransform } from '@angular/core';
import { Game } from '../components/games/games.component';

@Pipe({
  name: 'priceFilter'
})
export class PriceFilterPipe implements PipeTransform {

  transform(games:Game[], maxPrice: string) {
    games = games.filter(game => game.price.toString() <= maxPrice);
    return games;
  }
}
