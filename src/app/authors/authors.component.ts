import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../services/authors.service';

@Component({
  selector: 'authors',
  template: `
  <h2>{{ title }}</h2>
  <ul>
      <li *ngFor="let author of authors">
          {{ author }}
      </li>
  <ul>
  `
})


export class AuthorsComponent implements OnInit {
  title;
  authors;
  numAuthors;

  constructor(service: AuthorsService) { 
    this.authors = service.getAuthors();
    this.numAuthors = service.getAuthors().length;
    this.title = this.numAuthors + " Authors"
  }

  ngOnInit(): void {
  }

}
