import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BBScoreComponent } from './pages/bb-score/bb-score.component';
import { TeamtrackingComponent } from './pages/teamtracking/teamtracking.component';

const routes: Routes = [
  {
    path: '',
    component: TeamtrackingComponent,
    pathMatch: 'full'
  },
  {
    path: 'results/:teamCode',
    component: BBScoreComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
