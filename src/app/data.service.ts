import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  [x: string]: any;

  constructor(private http:HttpClient ) { }
  private dataUrl="./assets/data.json";
  
   
    getDataByUsername(username: string): Observable<any> {
      return this['http'].get<any>(this.dataUrl).pipe(
        map((data: { users: any; }) => {
          const users = data.users;
          return users.filter((user: { username: string; }) => user.username === username);
        })
      );
    }
}

export interface Employee {
  username:string;
  Status:string;
  password:string;
  FirstName:string;
  LastName:string;
  email:string;
}
