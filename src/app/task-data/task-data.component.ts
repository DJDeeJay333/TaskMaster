import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import SampleJson from '../../assets/JSON/db.json';

@Component({
  selector: 'task-data',
  templateUrl: './task-data.component.html',
  styleUrls: ['./task-data.component.css']
})
export class TaskDataComponent implements OnInit {

  data: string [];
  // http:HttpClient;

  projectCount = 0;

  constructor(
    private http: HttpClient
    ) {
    console.log('Reading local json files')
    console.log(SampleJson)
   }

  ngOnInit(): void
  {
    this.http.get(
      'assets/JSON/db.json'
    ).subscribe(data => {this.data = data as string[]},
      (err:HttpErrorResponse) => 
      {
        console.log(err.message);
      }
      );
  }

  

}
