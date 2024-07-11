import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgStyleLearnComponent } from './ng-style-learn.component';

describe('NgStyleLearnComponent', () => {
  let component: NgStyleLearnComponent;
  let fixture: ComponentFixture<NgStyleLearnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgStyleLearnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgStyleLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
