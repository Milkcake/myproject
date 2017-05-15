import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left',
  template: `
    <p>
      Firstname : <input (keyup)="onKey($event)">
      <br>
      Lastname : <input #lastname (keyup.enter)="onEnter(lastname.value)">
      {{firstName}} 
      <br>
      {{lastName}}
    </p>
  `,
  styles: []
})
export class LeftComponent implements OnInit {
  firstName:string;
  lastName:string;

  constructor() { }

  ngOnInit() {
  }

  onKey(event:KeyboardEvent){
    this.firstName=((<HTMLInputElement>event.target).value);
  }

  onEnter(value:string){
    this.lastName = value;
  }

}
