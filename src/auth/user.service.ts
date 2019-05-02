import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token: any;
  onTokenChanged: BehaviorSubject<string> = new BehaviorSubject('');

  userData: any;
  onUserDataChanged: BehaviorSubject<any> = new BehaviorSubject({});

  constructor() {

    localStorage.setItem('boy.token', 'snijqubdvytqwtcdsvqydu');

    this.setToken(localStorage.getItem('boy.token'));
    this.setUser(localStorage.getItem('boy.user'));
  }


  setToken(token) {
    this.token = token;
    this.onTokenChanged.next(this.token);
  }

  getToken() {
    return this.token;
  }

  parseData(data) {
    return typeof data === 'string' ? JSON.parse(data) : data;
  }

  setUser(user) {
    this.userData = this.parseData(user);
    this.onUserDataChanged.next(this.userData);
  }

  getUser() {
    return this.userData;
  }

  logout() {
    localStorage.removeItem('boy.user');
    localStorage.removeItem('boy.token');
    window.location.reload();
  }

}
