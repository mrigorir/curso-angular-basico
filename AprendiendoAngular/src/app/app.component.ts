import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: string[] = ['Marco', 'Alan', 'Ryan'];
  name: string;
  age: any;
  posts: any = [];

  constructor (private dataService: DataService) {
    this.name = 'Marco';
    this.age = 33;
    this.dataService.getData().subscribe(data => {
      this.posts = data;
    });
  }

  sayHello(user: string) {
    alert('Hello! '+ user);
  }

  addUser(newUser: any) {
    this.users.push(newUser.value);
    newUser.value = '';
    return false;
  }

  deleteUser (user: string) {
    for (let i = 0; i < this.users.length; i++) {
      if (user === this.users[i]) {
        this.users.splice(i, 1);
      }
    }
  }
}
