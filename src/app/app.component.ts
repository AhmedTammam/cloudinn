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
     (data) => {
        this.persons = this.persons.concat(data.results);
        console.log(data.results);
        console.log(this.persons);
        
     }
   )
   
    
  }
  
}
