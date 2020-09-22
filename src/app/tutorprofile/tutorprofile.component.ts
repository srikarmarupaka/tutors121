import { Component, OnInit } from '@angular/core';
import { Tutor } from '../tutor';
import { TutorsComponent } from '../tutors/tutors.component';
import { tutorslist } from '../tutors-list';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tutorprofile',
  templateUrl: './tutorprofile.component.html',
  styleUrls: ['./tutorprofile.component.scss']
})
export class TutorprofileComponent implements OnInit {

  tutorslist = tutorslist;
  tutor: TutorsComponent;
  selectedTutor: Tutor;
  public tutorid;

  constructor(private router : ActivatedRoute) { }

  ngOnInit(): void {
    let id = parseInt(this.router.snapshot.paramMap.get('id'));
    this.tutorid=id;
  }

  
}
