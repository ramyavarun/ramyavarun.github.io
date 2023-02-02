import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SelectedTeam } from '../../interfaces/teams.dto';
import { TeamsStateService } from '../../services/teams.state.service';

@Component({
  selector: 'app-bb-score',
  templateUrl: './bb-score.component.html',
  styleUrls: ['./bb-score.component.css']
})
export class BBScoreComponent {
  public team: SelectedTeam | undefined;

  constructor(private teamService: TeamsStateService, private activatedRoute: ActivatedRoute, public location: Location) {
    this.activatedRoute.params.subscribe((params: { [x: string]: string; }) => {
      this.team = this.teamService.selectedTeams.find((item) => item.team.abbreviation === params['teamCode']);
    });
  }

  goBack() {
    this.location.back();
  }
}
