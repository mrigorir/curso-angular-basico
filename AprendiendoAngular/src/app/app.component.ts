import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'Marco';
  age: number;
  address: {
    street: string,
    city: string
  }
  hobbies: string[];
  constructor () {
    this.age = 28;
    this.address = {
      street: 'AV 2-C',
      city: 'Maracaibo'
    }
    this.hobbies = ['pareja', 'estudiar', 'jugar'];  
  }  
}
