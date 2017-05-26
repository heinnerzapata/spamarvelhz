import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MarvelApiService {
  constructor (
    private http: Http
  ) {}

  getCharacters() {
    return this.http.get('https://gateway.marvel.com/v1/public/characters?nameStartsWith=patr&limit=50&ts=1&apikey=3ea1cd1673639f6a528e957b1db5939b&hash=cfa3f7936bc2ccd074e8876351bcffa3').map(
      (res) => res.json()
    );
  }

}
