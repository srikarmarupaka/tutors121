import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TutorsComponent } from './tutors/tutors.component';
import { FindateacherComponent } from './findateacher/findateacher.component';
import { HomeComponent } from './home/home.component';
import { LeftnavComponent } from './leftnav/leftnav.component';
import { TutorprofileComponent } from './tutorprofile/tutorprofile.component';



const routes: Routes = [

  {path:'', component: HomeComponent},
  {path:'findateacher', component: FindateacherComponent},
  {path:'tutorslist', component: TutorsComponent},
  {path:'tutorslist/:id', component: TutorprofileComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[TutorsComponent, TutorprofileComponent, FindateacherComponent, HomeComponent, LeftnavComponent]
