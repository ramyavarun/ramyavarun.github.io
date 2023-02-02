import { HttpParams } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { GamesResponse } from '../../interfaces/game.dto';
import { SelectedTeam } from '../../interfaces/teams.dto';
import { TeamsStateService } from '../../services/teams.state.service';
import { TeamsApiService } from '../../services/teams.api.service';

@Component({
  selector: 'app-bbteam-details',
  templateUrl: './bbteam-details.component.html',
  styleUrls: ['./bbteam-details.component.css']
})
export class BBteamDetailsComponent implements OnInit {
  imageUrl = 'https://interstate21.com/nba-logos/';

  @Input()
  team!: SelectedTeam;

  @Output() emitter: EventEmitter<SelectedTeam> = new EventEmitter();

  constructor(public teamService: TeamsStateService, private teamsApiService: TeamsApiService) {}

  ngOnInit() {
    this.fetchGamesList();
  }

  removeFromList() {
    this.emitter.emit(this.team);
  }

  fetchGamesList(): void {
    if (this.team.games?.length) {
      return;
    }
    let httpParams: HttpParams = new HttpParams();

    this.teamService.lastTwelveDays.forEach((date) => {
      httpParams = httpParams.append('dates[]', date);
    });

    httpParams = httpParams.append('team_ids[]', this.team.team.id);

    this.teamsApiService.getGamesList(httpParams).subscribe((response: GamesResponse) => {
      let averageScore = 0;
      let conceededScore = 0;

      response.data?.forEach((data) => {
        data.win = data.home_team_score - data.visitor_team_score > 0;

        if (data.home_team?.id === this.team.team.id) {
          averageScore += data.home_team_score;
          conceededScore += data.visitor_team_score;
        }

        if (data.visitor_team?.id === this.team.team.id) {
          averageScore += data.visitor_team_score;
          conceededScore += data.home_team_score;
        }

        this.team.games.push(data);
      });

      this.team.averageScore = Math.round(averageScore / response.data.length);
      this.team.conceededScore = Math.round(conceededScore / response.data.length);
    });
  }
}
