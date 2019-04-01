import { Component, OnInit } from '@angular/core';
import { DataService} from './data.service';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})

export class AppComponent implements OnInit {
  title = 'my-website';
  users;
  userNames;
  userEmail;

  constructor(private http: HttpClient , private dataService: DataService) {
    // this.dataService.retrieveAllUsers().subscribe((data) => this.users = data);
    // this.userNames = this.users.map(user => user.name);
  }

  ngOnInit() {
    this.dataService.retrieveAllUsers().subscribe((data) => this.users = data);
    // this.userNames = this.users.map(user => user.name);
    // this.http.get('http://localhost:3000/users.json')
    //          .subscribe((data) => {
    //            this.users = data;
    //          });
  }

  setUsers() {
    this.userNames = this.users.map(user => user.name);
  }
  printUsersToConsole() {
    console.log(this.users);
     this.userNames = this.users.map(user => user.name);
    console.log(this.userNames);
  }

}
