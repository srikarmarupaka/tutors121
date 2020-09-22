import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindateacherComponent } from './findateacher.component';

describe('FindateacherComponent', () => {
  let component: FindateacherComponent;
  let fixture: ComponentFixture<FindateacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindateacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindateacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
