import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SearchService {

  constructor(private httpClient:HttpClient) { }
  // creat Call Api function
  searchApi(term){
    return this.httpClient.get(`https://swapi.co/api/people/?search=${term}`);
  }
}
