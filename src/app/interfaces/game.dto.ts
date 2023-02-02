import { Meta } from './shared.dto';

export interface GamesResponse {
  data: GameEntity[];
  meta: Meta;
}

export interface GameEntity {
  id: number;
  date: string;
  home_team: HomeTeamOrVisitorTeam;
  home_team_score: number;
  period: number;
  postseason: boolean;
  season: number;
  status: string;
  time: string;
  visitor_team: HomeTeamOrVisitorTeam;
  visitor_team_score: number;
  win?: boolean;
}

export interface HomeTeamOrVisitorTeam {
  id: number;
  abbreviation: string;
  city: string;
  conference: string;
  division: string;
  full_name: string;
  name: string;
}
