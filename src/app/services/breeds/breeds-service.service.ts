import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Breeds} from "../../models/breeds";

@Injectable({
  providedIn: 'root'
})
export class BreedsServiceService {

  baseUrl = 'https://api.thedogapi.com/v1';
  header = {
    'x-api-key': 'live_0SqfA6WmGGJycPs16o2nfYM8uPuw1HQsa6Pi4v4Rs6nVxnByFmWc11gnD7W1STvx'
  }
  constructor(private http: HttpClient,
  ) { }

  getBreeds(): Observable<Breeds[]>{
    return this.http.get<Breeds[]>(`${this.baseUrl}/breeds?limit=12&page=0`,
      {headers: this.header})
  }
}

