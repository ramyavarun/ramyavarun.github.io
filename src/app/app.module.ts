import { TeamsApiService } from './services/teams.api.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BBScoreComponent } from './pages/bb-score/bb-score.component';
import { BBteamDetailsComponent } from './pages/bbteam-details/bbteam-details.component';
import { CommonInterceptor } from './http.interceptor';
import { TeamsStateService } from './services/teams.state.service';
import { TeamtrackingComponent } from './pages/teamtracking/teamtracking.component';

@NgModule({
  declarations: [AppComponent, BBScoreComponent, BBteamDetailsComponent, TeamtrackingComponent],
  imports: [CommonModule, BrowserModule, FormsModule, RouterModule, ReactiveFormsModule, AppRoutingModule, HttpClientModule],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CommonInterceptor,
      multi: true
    },
    TeamsStateService,
    TeamsApiService
  ]
})
export class AppModule {}
