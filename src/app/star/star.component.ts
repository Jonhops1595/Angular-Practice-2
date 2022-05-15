import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'star',
  template: `
   <span [class] ="icon" (click)=onClick()></span>
  `,
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  @Input() isActive = false;
  @Output() change = new EventEmitter();
  icon = "bi bi-star";

  constructor() { }

  onClick() { 
    this.isActive = !this.isActive;
    this.icon = (this.isActive) ? "bi bi-star-fill" : "bi bi-star";
    this.change.emit(this.isActive);
  }

  ngOnInit(): void {
  }

}
