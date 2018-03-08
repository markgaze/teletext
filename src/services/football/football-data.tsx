import ScoreModel from '../../components/score/score.model';

export default class FootballAPI {
  authToken: string = '6ef3af956d7f4c6e9db971d4fe244334';
  url: string = 'https://api.football-data.org/v1';
  
  getLastWeeksGames(compId: number): Promise<ScoreModel[]> {
    return this.getCompetitionData(compId)
      .then(comp => this.getGames(compId, comp.currentMatchday - 1));
  }

  getThisWeeksGames(compId: number): Promise<ScoreModel[]> {
    return this.getCompetitionData(compId)
      .then(comp => this.getGames(compId, comp.currentMatchday));
  }

  private getGames(compId: number, matchday: number): Promise<ScoreModel[]> {
    return fetch(`${this.url}/competitions/${compId}/fixtures/?matchday=${matchday}`, {
      headers: {
        'X-Auth-Token': this.authToken
      }
    })
      .then(res => res.json())
      .then(games =>
        games.fixtures.map((g: GameData) => {
          return {
              homeTeam: g.homeTeamName.replace(' FC', ''),
              homeTeamScore: g.result.goalsHomeTeam,
              homeScorers: [],
              awayTeam: g.awayTeamName.replace(' FC', ''),
              awayTeamScore: g.result.goalsAwayTeam,
              awayScorers: [],
              kickoffTime: this.convertDateToKickoffTime(new Date(g.date))
          };
        })
        .sort((a: ScoreModel, b: ScoreModel) => a.homeTeam > b.homeTeam)
      )
      .catch(err => err);
  }

  private convertDateToKickoffTime(gameDate: Date): string {
    var now = new Date();
    const dayOfWeek: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    if (now > gameDate) {
      return '';
    } else if (now.getDay() !== gameDate.getDay()) {
      return dayOfWeek[gameDate.getDay()];
    } else {
      return `${gameDate.getHours()}:${this.addLeadingZero(gameDate.getMinutes())}`;
    }
  }

  private addLeadingZero(num: number) {
    return `${(num < 10 ? '0' : '')}${num}`; 
  }

  private getCompetitionData(compId: number) {
    return fetch(`${this.url}/competitions/${445}`, {
      headers: {
        'X-Auth-Token': this.authToken
      }
    })
      .then(res => res.json());
  }
}

interface GameData {
  homeTeamName: string;
  awayTeamName: string;
  result: ResultData;
  date: string;
}

interface ResultData {
  goalsHomeTeam: number;
  goalsAwayTeam: number;
}