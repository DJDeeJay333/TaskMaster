import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'input-testing',
  templateUrl: './input-testing.component.html',
  // template:``,
  styleUrls: ['./input-testing.component.css']
})
export class InputTestingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.playOpeningTheme();
  }
  
  playOpeningTheme(){
    let audio = new Audio();
    audio.src = "assets/Audio/Taskmaster.mp3"
    audio.load();
    audio.play();
  }

  onClick(){
    alert("Clicked!");
  }

  keysPressed: string [] = [];
  onKeyUp(event){
    this.keysPressed.push(event.key);
  }

  values: string[] = [];
  onKeyUp2(event:KeyboardEvent){
    this.values.push((event.target as HTMLInputElement).value);
  }
  
  onEnter(value){
    alert(value);
  }
  
  value :string;
  update(value){
    this.value = value;
  }

  appTitle = "Input Testing"

  appList  = 
  [
    {"ID": "101" , "Name":"DeeJay"},
    {"ID": "102" , "Name":"DeeJay1"},
    {"ID": "103" , "Name":"DeeJay2"},
    {"ID": "104" , "Name":"DeeJay3"}
  ]
  
  _getAppName = "TaskMaster"

  getAppName():string{
    return this._getAppName
  }

}
