import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepagecontentComponent } from './homepagecontent/homepagecontent.component';
import { LivetrackerComponent } from './livetracker/livetracker.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path:'', redirectTo:'/home', pathMatch:'full' },
  { path:'home', component:HomepagecontentComponent },
  { path:'livetracker', component:LivetrackerComponent },
  { path:'contact', component:ContactComponent },
  { path:'**', component:PagenotfoundComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
