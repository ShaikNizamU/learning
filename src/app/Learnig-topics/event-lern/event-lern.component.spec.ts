import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventLernComponent } from './event-lern.component';

describe('EventLernComponent', () => {
  let component: EventLernComponent;
  let fixture: ComponentFixture<EventLernComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventLernComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventLernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
