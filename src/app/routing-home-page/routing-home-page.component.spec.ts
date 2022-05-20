import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingHomePageComponent } from './routing-home-page.component';

describe('RoutingHomePageComponent', () => {
  let component: RoutingHomePageComponent;
  let fixture: ComponentFixture<RoutingHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
