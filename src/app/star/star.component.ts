import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  template: `
   <span [class] ="icon" (click)=onClick()></span>
  `,
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  isActive = false;
  icon = "bi bi-star";

  constructor() { }

  onClick() { 
    this.isActive = !this.isActive;
    this.icon = (this.isActive) ? "bi bi-star-fill" : "bi bi-star";
  }

  ngOnInit(): void {
  }

}
