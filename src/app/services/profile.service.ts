import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  exhaustMap,
  take,
  throwError,
} from 'rxjs';
import { User } from '../shared/user.model';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient, private loginService: LoginService) {}
  user = JSON.parse(sessionStorage.getItem('userData'));
  profUser = new BehaviorSubject<User>(this.user);
  saveProfile(profileData: Object) {
    // Save profile data
    console.log(profileData);
    return this.http.put(
      `https://angular-lab-final-default-rtdb.europe-west1.firebasedatabase.app/profileData${
        JSON.parse(sessionStorage.getItem('userData')).id
      }.json`,
      profileData,
      { params: new HttpParams().set('auth', this.user._token) }
    );
  }
  getProfile() {
    return this.http.get(
      `https://angular-lab-final-default-rtdb.europe-west1.firebasedatabase.app/profileData${
        JSON.parse(sessionStorage.getItem('userData')).id
      }.json`,
      { params: new HttpParams().set('auth', this.user._token) }
    );
  }
}
