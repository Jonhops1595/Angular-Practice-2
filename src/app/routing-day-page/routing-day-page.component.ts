import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'routing-day-page',
  templateUrl: './routing-day-page.component.html',
  styleUrls: ['./routing-day-page.component.css']
})
export class RoutingDayPageComponent implements OnInit {

  year!: number;
  month!: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let params = this.route.snapshot.paramMap;
    this.year = <number><unknown>params.get('year');
    this.month = <number><unknown>params.get('month');
  }

}
