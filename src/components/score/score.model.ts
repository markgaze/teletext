export default interface ScoreModel {
  homeTeam: string;
  homeTeamScore: number;
  homeScorers: string[];
  awayTeam: string;
  awayTeamScore: number;
  awayScorers: string[];
  kickoffTime?: string;
}