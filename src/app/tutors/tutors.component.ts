import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tutorslist } from '../tutors-list';
import { Tutor } from '../tutor';

@Component({
  selector: 'app-tutors',
  templateUrl: './tutors.component.html',
  styleUrls: ['./tutors.component.scss']
})
export class TutorsComponent implements OnInit {
  
  tutorslist = tutorslist;
  selectedTutor: Tutor;


  constructor(private router : Router) {
    
   }

  ngOnInit(): void {
  }

  onSelect(tutor){
    this.router.navigate(['/tutorslist',tutor.id])
  }
}
