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
  userName;
  userEmail;

  constructor(private http: HttpClient , private dataService: DataService) { }

  ngOnInit() {
    // this.dataService.retrieveAllUsers().subscribe((users) => this.users = users);
    this.http.get('http://localhost:3000/users.json')
             .subscribe((data) => {
               this.users = data;
             });
  }

  printUsersToConsole() {
    this.userName = this.users.map(user => user.name);
  }

}
