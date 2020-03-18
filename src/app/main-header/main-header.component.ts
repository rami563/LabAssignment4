import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  title = 'LabAssignment3';
  firstName = 'Rami';
  lastName = 'Abed';
  greeting = 'r1c2';

  constructor() { }

  ngOnInit() {
  }

  showGreeting() {
    // const row2 = document.getElementById("r1c2");
    this.greeting = 'Hello ' + this.firstName + ' ' + this.lastName + '.'; 
  }

  resetGreeting() {
    const row2 = document.getElementById("r1c2");
    this.greeting = 'r1c2';
  }


}
