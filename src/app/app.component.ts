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
// searching for characters with entry Keyword - getting data and assign it to Persons array
  search(value){
    this.searchSer.searchApi(value.term)
   .subscribe(
     (data) => {
       // check if fetching data or not
       if(data["results"] && data["results"].length){
        this.persons = data["results"]; 
       }else{
         this.persons = [];
       }  
     }
   )
   // reset term
   this.term = '';
  }
  
}
