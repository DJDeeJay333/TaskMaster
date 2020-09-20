import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {


  constructor() { }

  _getAppName = "TaskMaster"

  getAppName():string{
    return this._getAppName
  }

  checkIfProjectData(data:string):boolean{
    if(data.toLowerCase().includes("project"))
      return true;
    else
      return false;
  }

}
