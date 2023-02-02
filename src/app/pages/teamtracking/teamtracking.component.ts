import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TeamListResponse } from '../../interfaces/teams.dto';
import { TeamsStateService } from '../../services/teams.state.service';
import { TeamsApiService } from '../../services/teams.api.service';

@Component({
  selector: 'app-teamtracking',
  templateUrl: './teamtracking.component.html',
  styleUrls: ['./teamtracking.component.css']
})
export class TeamtrackingComponent implements OnInit {
  public form: FormGroup = new FormGroup({
    team: new FormControl(null, Validators.required)
  });

  constructor(public teamService: TeamsStateService, private teamsApiService: TeamsApiService) {}

  ngOnInit() {
    this.getTeamsList();
  }

  getTeamsList() {
    this.teamsApiService.getTeamsList().subscribe(
      (response: TeamListResponse) => {
        console.log(response);
        this.teamService.totalTeams = response.data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  setSelectedTeam() {
    const team = Number(this.form.value.team);
    const selectedTeamIndex = this.teamService.selectedTeams.findIndex((item) => item.team.id === team);

    if (selectedTeamIndex === -1) {
      const teamValue = this.teamService.totalTeams.find((item) => item.id === team);
      if (teamValue) {
        this.teamService.selectedTeams.push({
          team: teamValue,
          games: []
        });
      }
    }
  }

  removeTeam(teamIndex: number) {
    this.teamService.selectedTeams.splice(teamIndex, 1);
  }
}
