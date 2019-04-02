import { Component, OnInit } from '@angular/core';
import { DataService} from './services/data.service';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})

export class AppComponent implements OnInit {
  title = 'my-website';
  private userNames: object;
  private userEmails: object;

  constructor(private http: HttpClient , private dataService: DataService) { }

  ngOnInit() {
    this.dataService.retrieveAllUsers().subscribe(
      (users) => this.setUserData(users)
    );
  }

  setUserData(users) {
    this.userNames = users.map(user => user.name);
    this.userEmails = users.map(user => user.email);
  }

}
