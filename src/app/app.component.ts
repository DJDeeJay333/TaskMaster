import { Component, OnInit } from '@angular/core';
import {MasterService} from './master-service.service';
// import { InputTestingComponent} from './input-testing/input-testing.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [MasterService]   // Doesn't seem to make a difference
})
export class AppComponent implements OnInit{
  title = 'TaskMaster';
  // _appService: MasterService;
  // _appService: InputTestingComponent;
  
  constructor (private _appService: MasterService){}
  // constructor (private _appService: InputTestingComponent){}
  
  ngOnInit(): void 
  {
  }

  getName():string
  {
    return this._appService.getAppName()
  }
}
