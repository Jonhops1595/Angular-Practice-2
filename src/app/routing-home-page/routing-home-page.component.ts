import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'routing-home-page',
  templateUrl: './routing-home-page.component.html',
  styleUrls: ['./routing-home-page.component.css']
})
export class RoutingHomePageComponent implements OnInit {

  posts = [
    {year:2021, month:1},
    {year:2021, month:2},
    {year:2021, month:3}];

  constructor() { }

  ngOnInit(): void {
  }

}
