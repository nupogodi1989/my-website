import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  retrieveAllUsers() {
    return this.http.get('http://localhost:3000/users.json');
  }

}
