import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeSpeechComponent } from './pages/home-speech/home-speech.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/speech'
  },
  {
    path: 'speech', component: HomeSpeechComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
