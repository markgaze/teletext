export default interface IScore {
  homeTeam: string;
  homeTeamScore?: number;
  homeScorers: string[];
  awayTeam: string;
  awayTeamScore?: number;
  awayScorers: string[];
  kickoffTime?: string;
}
