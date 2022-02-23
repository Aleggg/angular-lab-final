import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, exhaustMap, take, throwError } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient, private loginService: LoginService) {}
  //user = JSON.parse(sessionStorage.getItem('userData'));
  saveProfile(profileData: Object) {
    // Save profile data
    return this.http.put(
      `https://angular-lab-final-default-rtdb.europe-west1.firebasedatabase.app/profileData${
        JSON.parse(sessionStorage.getItem('userData')).id
      }.json`,
      profileData,
      {
        params: new HttpParams().set(
          'auth',
          JSON.parse(sessionStorage.getItem('userData'))._token
        ),
      }
    );
  }
  getProfile() {
    return this.http.get(
      `https://angular-lab-final-default-rtdb.europe-west1.firebasedatabase.app/profileData${
        JSON.parse(sessionStorage.getItem('userData')).id
      }.json`,
      {
        params: new HttpParams().set(
          'auth',
          JSON.parse(sessionStorage.getItem('userData'))._token
        ),
      }
    );
  }
}
