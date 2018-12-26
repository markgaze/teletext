import ScoreModel from '../../components/score/score.model';

export default class FootballAPI {
  authToken: string = '6ef3af956d7f4c6e9db971d4fe244334';
  url: string = 'https://api.football-data.org/v2';
  
  getLastWeeksGames(compId: number): Promise<ScoreModel[]> {
    return this.getCompetitionData(compId)
      .then(comp => this.getGames(compId, comp.currentSeason.currentMatchday - 1));
  }

  getThisWeeksGames(compId: number): Promise<ScoreModel[]> {
    return this.getCompetitionData(compId)
      .then(comp => this.getGames(compId, comp.currentSeason.currentMatchday));
  }

  private getGames(compId: number, matchday: number): Promise<ScoreModel[]> {
    return fetch(`${this.url}/competitions/${compId}/matches/?matchday=${matchday}`, {
      headers: {
        'X-Auth-Token': this.authToken
      }
    })
      .then(res => res.json())
      .then(games =>
        games.matches.map((g: GameData) => {
          return {
              homeTeam: g.homeTeam.name.replace(' FC', ''),
              homeTeamScore: g.score.fullTime.homeTeam,
              homeScorers: [],
              awayTeam: g.awayTeam.name.replace(' FC', ''),
              awayTeamScore: g.score.fullTime.awayTeam,
              awayScorers: [],
              kickoffTime: this.convertDateToKickoffTime(new Date(g.utcDate))
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
    return fetch(`${this.url}/competitions/${compId}`, {
      headers: {
        'X-Auth-Token': this.authToken
      }
    })
      .then(res => res.json());
  }
}

interface GameData {
  homeTeam: TeamData;
  awayTeam: TeamData;
  score: ScoreData;
  utcDate: string;
}

interface TeamData {
  id: number;
  name: string;
}

interface ScoreData {
  fullTime: ScorelineData;
}

interface ScorelineData {
  homeTeam: number;
  awayTeam: number;
}
