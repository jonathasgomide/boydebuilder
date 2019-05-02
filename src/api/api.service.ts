import { UserService } from './../auth/user.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Body } from '@angular/http/src/body';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://pokeapi.co/api/v2/'; // 'https://localhost:44359/';
  Token = '';

  constructor(public http: HttpClient, private userService: UserService) {
    this.userService.onTokenChanged
      .subscribe(token => {
        this.Token = token;
      });
  }

  protected obterAuthHeader(conType?: string) {
    return new HttpHeaders({
      'Content-Type': !conType ? 'application/json' : conType,
      'Authorization': this.Token ? 'Bearer ' + this.Token : ''
    });
  }

  private extractData(res: any) {
    const body = res.params;
    return body || {};
  }

  getApi(url, data?: any): Observable<any> {
    return this.http.get(this.apiUrl + url, {
      headers: this.obterAuthHeader(),
      params: this.extractData(data)
    }
    );
  }

  getApiFake(url, data?: any) {
    return [{}];
  }

}
