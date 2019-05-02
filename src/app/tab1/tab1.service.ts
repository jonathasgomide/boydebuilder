import { Injectable } from '@angular/core';
import { ApiService } from 'src/api/api.service';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Tab1Service {

  constructor(private apiService: ApiService) { }

  getPokemon() {
    const params = {
      params: new HttpParams()
       .set('Pikachu', 'Pika')
    };

    this.apiService.getApi('pokemon/ditto/', params).subscribe(
      data => {
        console.log('data ', data);
      }, error => {
        console.log('error ', error);
      }
    );
  }
}
