import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  myImage:string = 'assets/images/steam-seeklogo.com 1.png'

  constructor() { }

  ngOnInit(): void {
  }

}
