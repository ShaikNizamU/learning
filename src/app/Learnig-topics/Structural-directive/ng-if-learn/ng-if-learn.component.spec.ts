import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfLearnComponent } from './ng-if-learn.component';

describe('NgIfLearnComponent', () => {
  let component: NgIfLearnComponent;
  let fixture: ComponentFixture<NgIfLearnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgIfLearnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIfLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
