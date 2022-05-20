import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingDayPageComponent } from './routing-day-page.component';

describe('RoutingDayPageComponent', () => {
  let component: RoutingDayPageComponent;
  let fixture: ComponentFixture<RoutingDayPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingDayPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingDayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
