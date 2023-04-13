import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacebookComponent } from './facebook/facebook.component';
import { HomeComponent } from './home/home.component';
import { TwitterComponent } from './twitter/twitter.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full' 
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'facebook/:campaign/:medium',
    component: FacebookComponent
  },
  {
    path: 'twitter/:campaign/:medium',
    component: TwitterComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
