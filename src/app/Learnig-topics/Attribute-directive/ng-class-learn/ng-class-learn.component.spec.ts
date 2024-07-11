import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClassLearnComponent } from './ng-class-learn.component';

describe('NgClassLearnComponent', () => {
  let component: NgClassLearnComponent;
  let fixture: ComponentFixture<NgClassLearnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgClassLearnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgClassLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
