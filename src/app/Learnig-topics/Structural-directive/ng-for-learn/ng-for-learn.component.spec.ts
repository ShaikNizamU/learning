import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForLearnComponent } from './ng-for-learn.component';

describe('NgForLearnComponent', () => {
  let component: NgForLearnComponent;
  let fixture: ComponentFixture<NgForLearnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgForLearnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgForLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
