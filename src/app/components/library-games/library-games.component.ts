import { Component, OnInit } from '@angular/core';
import { Game } from '../games/games.component';
import { MyGamesService } from '../../service/my-games.service';

@Component({
  selector: 'app-library-games',
  templateUrl: './library-games.component.html',
  styleUrls: ['./library-games.component.css']
})
export class LibraryGamesComponent implements OnInit {

  myGames: Game[] = [];
  
  constructor(private service:MyGamesService) { }

  ngOnInit(): void {
    this.myGames = this.service.myGames;
  
  }
  
  
}
