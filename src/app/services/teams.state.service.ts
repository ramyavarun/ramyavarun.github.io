import { Injectable } from '@angular/core';
import { SelectedTeam, Team } from '../interfaces/teams.dto';

@Injectable()
export class TeamsStateService {
  public totalTeams: Team[] = [];
  public selectedTeams: SelectedTeam[] = [];
  public lastTwelveDays: string[] = lastTwelveDays(new Date().setDate(new Date().getDate() - 12), new Date());

  constructor() {}
}

function lastTwelveDays(s: string | number | Date, e: string | number | Date) {
  for (var a = [], d = new Date(s); d <= new Date(e); d.setDate(d.getDate() + 1)) {
    a.push(new Date(d).toISOString().slice(0, 10));
  }
  return a;
}
