import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TeamListResponse } from '../interfaces/teams.dto';
import { GamesResponse } from '../interfaces/game.dto';

@Injectable()
export class TeamsApiService {
  private httpHeaders: HttpHeaders = new HttpHeaders();

  constructor(private httpClient: HttpClient) {}

  getTeamsList(): Observable<TeamListResponse> {
    return this.httpClient.get<TeamListResponse>(`${environment.baseUrl}/teams`);
  }

  getGamesList(params: HttpParams): Observable<GamesResponse> {
    return this.httpClient.get<GamesResponse>(`${environment.baseUrl}/games`, {
      headers: this.httpHeaders,
      params: params
    });
  }
}
