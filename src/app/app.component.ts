import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-lab-final';
  isLogged = true;
  userSub: any = null;
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.userSub = this.loginService.user.subscribe((user) => {
      this.isLogged = !user ? false : true;
    });
  }
  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
