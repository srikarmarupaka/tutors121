import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorprofileComponent } from './tutorprofile.component';

describe('TutorprofileComponent', () => {
  let component: TutorprofileComponent;
  let fixture: ComponentFixture<TutorprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
