import { Component } from '@angular/core';

@Component({
  selector: 'movie-title',
  template: `
    <input [(ngModel)] = title> 
    <p> {{ title  | movieTitle}}</p>
  `
})
export class MovieTitleComponent {
  title = "";
  constructor() { }

}
