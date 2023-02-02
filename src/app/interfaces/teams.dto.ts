import { GameEntity } from './game.dto';
import { Meta } from './shared.dto';

export interface Team {
  abbreviation: string;
  city: string;
  conference: string;
  division: string;
  full_name: string;
  id: number;
  teamname: string;
}

export interface TeamListResponse {
  data: Team[];
  meta: Meta;
}

export interface SelectedTeam {
  team: Team;
  games: GameEntity[];
  averageScore?: number;
  conceededScore?: number;
}
