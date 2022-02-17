import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  saveProfile(profileData: Object) {
    // Save profile data
    return this.http.post(
      'https://angular-lab-final-default-rtdb.europe-west1.firebasedatabase.app/profileData.json',
      profileData
    );
  }
}
