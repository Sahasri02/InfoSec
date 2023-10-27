import { Component } from '@angular/core';
import { DataService, Employee } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent {

  searchName:string='';
  
  foundEmployee!: Observable<any>;
  users$: Observable<any> | undefined;
  
  constructor(private dataservice:DataService) {}
  ngOnInit():void {
    this.users$ = this.dataservice.getDataByUsername(this.searchName);
  }
  
  isVisible!:boolean;
  searchEmployee():Observable<any> {
   
    const result=this.dataservice.getDataByUsername(this.searchName);
    console.log(result);
    this.foundEmployee = result;
    return this.foundEmployee;
    
  }
  
}

