export default interface TableModel {
  lastUpdated: Date;
  teams: TeamModel[];
}

export interface TeamModel {
  position: number;
  teamName: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  for: number;
  against: number;
  points: number;
}
