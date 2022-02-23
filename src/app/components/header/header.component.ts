import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  myImage: string = 'assets/images/steam-seeklogo.com 1.png';
  isVisible = false;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  onLogout() {
    this.loginService.logout();
    console.log('works');
  }

  isVisibleMenu() {
    this.isVisible = !this.isVisible
  }
}
