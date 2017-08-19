import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { DataService } from '../shared/services/data.service';
import { ItemsService } from '../shared/utils/items.service';
import { Globals} from '../shared/utils/globals';
import { IGlobal } from '../shared/interfaces';
import {HttpClientModule} from '@angular/common/http';

@Component({
   
moduleId: module.id,
    selector: 'logged',

    templateUrl: 'logged.component.html',

})
export class LoggedComponent implements OnInit {
 //private GOB:any={'name':'r'};

 private GOB={'user':{'name':'jjjjjjjjjjj'}};
 private username:string='kllkkl';
   constructor(private dataservice:DataService,private http:Http) {
       // this.gg=Globals.username;
   //   this.GOB=this.dataservice.getGlobals();
      // console.log(dataservice.getGlobals());
      // this.username=this.GOB.name;



    }


  ngOnInit() {
 // this.GOB.name=this.dataservice.getGlobals();
  //this.GOB.name='ffffff';
//this.GOB= this.itemsService.getSerialized<IGlobal>(3);

this.http.get<IGlobal>('http://localhost:8000/cors/global').subscribe(data => {
  // data is now an instance of type ItemsResponse, so you can do this:
  this.GOB.user.name = data.user.name;
});

    }
}