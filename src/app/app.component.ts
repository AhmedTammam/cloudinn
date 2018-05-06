import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchService } from './services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {

  constructor(private httpClient:HttpClient, private searchSer:SearchService){

  }

  term = '';
  persons = [];

  search(value){
    this.searchSer.searchApi(value.term)
   .subscribe(
     (data) => {
        this.persons = data["results"];
        console.log(data["results"]);
        console.log(this.persons);  
     }
   )
   this.term = '';
  }
  
}
