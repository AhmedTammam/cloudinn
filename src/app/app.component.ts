import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {

  constructor(private httpClient:HttpClient){

  }

  term = '';
  persons = [];

  fetchData(value){
   this.httpClient.get(`https://swapi.co/api/people/?search=${value.term}`)
   .subscribe(
     (data)=>{
         this.persons = data.results;
       console.log(this.persons);
       
       
     }
   )
    
  }
  
}
