import FootballAPI from './football-data';
import * as FetchMock from 'fetch-mock';
import ScoreModel from '../../components/score/score.model';

describe('Football Data API', () => {
  beforeAll(() => {
    FetchMock.mock('glob:https://api.football-data.org/v2/competitions/*/matches/?matchday=*', {
      status: 200,
      body: {
        'count': 10,
        'filters': { 'matchday': '18' },
        'competition': { 'id': 2021, 'area': { 'id': 2072, 'name': 'England' }, 'name': 'Premier League', 'code': 'PL', 'plan': 'TIER_ONE', 'lastUpdated': '2018-12-26T23:09:49Z' },
        'matches': [
          {
            'id': 233193,
            'season': { 'id': 151, 'startDate': '2018-08-10', 'endDate': '2019-05-12', 'currentMatchday': 19 },
            'utcDate': '2018-12-21T20:00:00Z',
            'status': 'FINISHED',
            'matchday': 18,
            'stage': 'REGULAR_SEASON',
            'group': 'Regular Season',
            'lastUpdated': '2018-12-22T22:55:01Z',
            'score': {
              'winner': 'AWAY_TEAM',
              'duration': 'REGULAR',
              'fullTime': { 'homeTeam': 0, 'awayTeam': 2 },
              'halfTime': { 'homeTeam': 0, 'awayTeam': 1 },
              'extraTime': { 'homeTeam': null, 'awayTeam': null },
              'penalties': { 'homeTeam': null, 'awayTeam': null }
            },
            'homeTeam': { 'id': 76, 'name': 'Wolverhampton Wanderers FC' },
            'awayTeam': { 'id': 64, 'name': 'Liverpool FC' },
            'referees': [
              { 'id': 11585, 'name': 'Craig Pawson', 'nationality': null },
              { 'id': 11530, 'name': 'Lee Betts', 'nationality': null },
              { 'id': 11586, 'name': 'Richard West', 'nationality': null },
              { 'id': 11605, 'name': 'Michael Oliver', 'nationality': null }
            ]
          },
          {
            'id': 233196,
            'season': { 'id': 151, 'startDate': '2018-08-10', 'endDate': '2019-05-12', 'currentMatchday': 19 },
            'utcDate': '2018-12-22T12:30:00Z',
            'status': 'FINISHED',
            'matchday': 18,
            'stage': 'REGULAR_SEASON',
            'group': 'Regular Season',
            'lastUpdated': '2018-12-23T13:30:07Z',
            'score': {
              'winner': 'HOME_TEAM',
              'duration': 'REGULAR',
              'fullTime': { 'homeTeam': 3, 'awayTeam': 1 },
              'halfTime': { 'homeTeam': 1, 'awayTeam': 0 },
              'extraTime': { 'homeTeam': null, 'awayTeam': null },
              'penalties': { 'homeTeam': null, 'awayTeam': null }
            },
            'homeTeam': { 'id': 57, 'name': 'Arsenal FC' },
            'awayTeam': { 'id': 328, 'name': 'Burnley FC' },
            'referees': [
              { 'id': 11487, 'name': 'Kevin Friend', 'nationality': null },
              { 'id': 11444, 'name': 'Matthew Wilkes', 'nationality': null },
              { 'id': 11505, 'name': 'Derek Eaton', 'nationality': null },
              { 'id': 11430, 'name': 'Simon Hooper', 'nationality': null }
            ]
          },
          {
            'id': 233194,
            'season': { 'id': 151, 'startDate': '2018-08-10', 'endDate': '2019-05-12', 'currentMatchday': 19 },
            'utcDate': '2018-12-22T15:00:00Z',
            'status': 'FINISHED',
            'matchday': 18,
            'stage': 'REGULAR_SEASON',
            'group': 'Regular Season',
            'lastUpdated': '2018-12-22T18:39:56Z',
            'score': {
              'winner': 'AWAY_TEAM',
              'duration': 'REGULAR',
              'fullTime': { 'homeTeam': 2, 'awayTeam': 3 },
              'halfTime': { 'homeTeam': 1, 'awayTeam': 2 },
              'extraTime': { 'homeTeam': null, 'awayTeam': null },
              'penalties': { 'homeTeam': null, 'awayTeam': null }
            },
            'homeTeam': { 'id': 65, 'name': 'Manchester City FC' },
            'awayTeam': { 'id': 354, 'name': 'Crystal Palace FC' },
            'referees': [
              { 'id': 11610, 'name': 'Andre Marriner', 'nationality': null },
              { 'id': 11611, 'name': 'Scott Ledger', 'nationality': null },
              { 'id': 11570, 'name': 'Harry Lennard', 'nationality': null },
              { 'id': 11580, 'name': 'Anthony Taylor', 'nationality': null }
            ]
          },
          {
            'id': 233195,
            'season': { 'id': 151, 'startDate': '2018-08-10', 'endDate': '2019-05-12', 'currentMatchday': 19 },
            'utcDate': '2018-12-22T15:00:00Z',
            'status': 'FINISHED',
            'matchday': 18,
            'stage': 'REGULAR_SEASON',
            'group': 'Regular Season',
            'lastUpdated': '2018-12-22T18:39:56Z',
            'score': {
              'winner': 'DRAW',
              'duration': 'REGULAR',
              'fullTime': { 'homeTeam': 0, 'awayTeam': 0 },
              'halfTime': { 'homeTeam': 0, 'awayTeam': 0 },
              'extraTime': { 'homeTeam': null, 'awayTeam': null },
              'penalties': { 'homeTeam': null, 'awayTeam': null }
            },
            'homeTeam': { 'id': 67, 'name': 'Newcastle United FC' },
            'awayTeam': { 'id': 63, 'name': 'Fulham FC' },
            'referees': [
              { 'id': 11551, 'name': 'Martin Atkinson', 'nationality': null },
              { 'id': 11547, 'name': 'Stephen Child', 'nationality': null },
              { 'id': 11581, 'name': 'Gary Beswick', 'nationality': null },
              { 'id': 11472, 'name': 'Jeremy Simpson', 'nationality': null }
            ]
          },
          {
            'id': 233197,
            'season': { 'id': 151, 'startDate': '2018-08-10', 'endDate': '2019-05-12', 'currentMatchday': 19 },
            'utcDate': '2018-12-22T15:00:00Z',
            'status': 'FINISHED',
            'matchday': 18,
            'stage': 'REGULAR_SEASON',
            'group': 'Regular Season',
            'lastUpdated': '2018-12-22T18:39:56Z',
            'score': {
              'winner': 'AWAY_TEAM',
              'duration': 'REGULAR',
              'fullTime': { 'homeTeam': 0, 'awayTeam': 1 },
              'halfTime': { 'homeTeam': 0, 'awayTeam': 0 },
              'extraTime': { 'homeTeam': null, 'awayTeam': null },
              'penalties': { 'homeTeam': null, 'awayTeam': null }
            },
            'homeTeam': { 'id': 61, 'name': 'Chelsea FC' },
            'awayTeam': { 'id': 338, 'name': 'Leicester City FC' },
            'referees': [
              { 'id': 11436, 'name': 'Lee Probert', 'nationality': null },
              { 'id': 11544, 'name': 'Simon Beck', 'nationality': null },
              { 'id': 11595, 'name': 'Adrian Holmes', 'nationality': null },
              { 'id': 11520, 'name': 'Paul Tierney', 'nationality': null }
            ]
          },
          {
            'id': 233199,
            'season': { 'id': 151, 'startDate': '2018-08-10', 'endDate': '2019-05-12', 'currentMatchday': 19 },
            'utcDate': '2018-12-22T15:00:00Z',
            'status': 'FINISHED',
            'matchday': 18,
            'stage': 'REGULAR_SEASON',
            'group': 'Regular Season',
            'lastUpdated': '2018-12-22T18:39:56Z',
            'score': {
              'winner': 'AWAY_TEAM',
              'duration': 'REGULAR',
              'fullTime': { 'homeTeam': 1, 'awayTeam': 3 },
              'halfTime': { 'homeTeam': 0, 'awayTeam': 2 },
              'extraTime': { 'homeTeam': null, 'awayTeam': null },
              'penalties': { 'homeTeam': null, 'awayTeam': null }
            },
            'homeTeam': { 'id': 394, 'name': 'Huddersfield Town AFC' },
            'awayTeam': { 'id': 340, 'name': 'Southampton FC' },
            'referees': [
              { 'id': 11494, 'name': 'Stuart Attwell', 'nationality': null },
              { 'id': 11495, 'name': 'Ian Hussin', 'nationality': null },
              { 'id': 11568, 'name': 'Andrew Halliday', 'nationality': null },
              { 'id': 11567, 'name': 'Jonathan Moss', 'nationality': null }
            ]
          },
          {
            'id': 233201,
            'season': { 'id': 151, 'startDate': '2018-08-10', 'endDate': '2019-05-12', 'currentMatchday': 19 },
            'utcDate': '2018-12-22T15:00:00Z',
            'status': 'FINISHED',
            'matchday': 18,
            'stage': 'REGULAR_SEASON',
            'group': 'Regular Season',
            'lastUpdated': '2018-12-22T18:39:56Z',
            'score': {
              'winner': 'AWAY_TEAM',
              'duration': 'REGULAR',
              'fullTime': { 'homeTeam': 0, 'awayTeam': 2 },
              'halfTime': { 'homeTeam': 0, 'awayTeam': 1 },
              'extraTime': { 'homeTeam': null, 'awayTeam': null },
              'penalties': { 'homeTeam': null, 'awayTeam': null }
            },
            'homeTeam': { 'id': 563, 'name': 'West Ham United FC' },
            'awayTeam': { 'id': 346, 'name': 'Watford FC' },
            'referees': [
              { 'id': 11479, 'name': 'Lee Mason', 'nationality': null },
              { 'id': 11480, 'name': 'Eddie Smart', 'nationality': null },
              { 'id': 11531, 'name': 'Marc Perry', 'nationality': null },
              { 'id': 11387, 'name': 'Andrew Davies', 'nationality': null }
            ]
          },
          {
            'id': 233202,
            'season': { 'id': 151, 'startDate': '2018-08-10', 'endDate': '2019-05-12', 'currentMatchday': 19 },
            'utcDate': '2018-12-22T15:00:00Z',
            'status': 'FINISHED',
            'matchday': 18,
            'stage': 'REGULAR_SEASON',
            'group': 'Regular Season',
            'lastUpdated': '2018-12-22T18:39:56Z',
            'score': {
              'winner': 'HOME_TEAM',
              'duration': 'REGULAR',
              'fullTime': { 'homeTeam': 2, 'awayTeam': 0 },
              'halfTime': { 'homeTeam': 1, 'awayTeam': 0 },
              'extraTime': { 'homeTeam': null, 'awayTeam': null },
              'penalties': { 'homeTeam': null, 'awayTeam': null }
            },
            'homeTeam': { 'id': 1044, 'name': 'AFC Bournemouth' },
            'awayTeam': { 'id': 397, 'name': 'Brighton & Hove Albion FC' },
            'referees': [
              { 'id': 11575, 'name': 'Mike Dean', 'nationality': null },
              { 'id': 11576, 'name': 'Darren Cann', 'nationality': null },
              { 'id': 11431, 'name': 'Daniel Robathan', 'nationality': null },
              { 'id': 11503, 'name': 'Graham Scott', 'nationality': null }
            ]
          },
          {
            'id': 233200,
            'season': { 'id': 151, 'startDate': '2018-08-10', 'endDate': '2019-05-12', 'currentMatchday': 19 },
            'utcDate': '2018-12-22T17:30:00Z',
            'status': 'FINISHED',
            'matchday': 18,
            'stage': 'REGULAR_SEASON',
            'group': 'Regular Season',
            'lastUpdated': '2018-12-23T19:30:08Z',
            'score': {
              'winner': 'AWAY_TEAM',
              'duration': 'REGULAR',
              'fullTime': { 'homeTeam': 1, 'awayTeam': 5 },
              'halfTime': { 'homeTeam': 1, 'awayTeam': 3 },
              'extraTime': { 'homeTeam': null, 'awayTeam': null },
              'penalties': { 'homeTeam': null, 'awayTeam': null }
            },
            'homeTeam': { 'id': 715, 'name': 'Cardiff City FC' },
            'awayTeam': { 'id': 66, 'name': 'Manchester United FC' },
            'referees': [
              { 'id': 11605, 'name': 'Michael Oliver', 'nationality': null },
              { 'id': 11488, 'name': 'Simon Bennett', 'nationality': null },
              { 'id': 11496, 'name': 'Mick McDonough', 'nationality': null },
              { 'id': 11543, 'name': 'Roger East', 'nationality': null }
            ]
          },
          {
            'id': 233198,
            'season': { 'id': 151, 'startDate': '2018-08-10', 'endDate': '2019-05-12', 'currentMatchday': 19 },
            'utcDate': '2018-12-23T16:00:00Z',
            'status': 'FINISHED',
            'matchday': 18,
            'stage': 'REGULAR_SEASON',
            'group': 'Regular Season',
            'lastUpdated': '2018-12-24T00:45:00Z',
            'score': {
              'winner': 'AWAY_TEAM',
              'duration': 'REGULAR',
              'fullTime': { 'homeTeam': 2, 'awayTeam': 6 },
              'halfTime': { 'homeTeam': 1, 'awayTeam': 3 },
              'extraTime': { 'homeTeam': null, 'awayTeam': null },
              'penalties': { 'homeTeam': null, 'awayTeam': null }
            },
            'homeTeam': { 'id': 62, 'name': 'Everton FC' },
            'awayTeam': { 'id': 73, 'name': 'Tottenham Hotspur FC' },
            'referees': [
              { 'id': 11520, 'name': 'Paul Tierney', 'nationality': null },
              { 'id': 11615, 'name': 'Adam Nunn', 'nationality': null },
              { 'id': 11606, 'name': 'Constantine Hatzidakis', 'nationality': null },
              { 'id': 11443, 'name': 'Chris Kavanagh', 'nationality': null }
            ]
          }
        ]    
      }
    });

    FetchMock.mock('glob:https://api.football-data.org/v2/competitions/**', {
      status: 200,
      body: {
        '_links': {
          'self': {
            'href': 'http://api.football-data.org/v2/competitions/2021'
          },
          'teams': {
            'href': 'http://api.football-data.org/v2/competitions/2021/teams'
          },
          'fixtures': {
            'href': 'http://api.football-data.org/v2/competitions/2021/matches'
          },
          'leagueTable': {
            'href': 'http://api.football-data.org/v2/competitions/2021/leagueTable'
          }
        },
        'id': 2021,
        'caption': 'Premier League 2018/19',
        'league': 'PL',
        'year': '2017',
        'currentMatchday': 30,
        'numberOfMatchdays': 38,
        'numberOfTeams': 20,
        'numberOfGames': 380,
        'lastUpdated': '2018-03-08T11:00:01Z'
      }
    });
  });

  afterAll(FetchMock.restore);

  it('can get last weeks games', () => {
    var data = new FootballAPI().getLastWeeksGames(2021);
    expect(data).toBeDefined();
  });

  it('can get correct scores', () => {
    new FootballAPI()
      .getLastWeeksGames(2021)
      .then((data: ScoreModel[]) => {
        expect(data).toBeDefined();
        expect(data[0]).toBeDefined();
        expect(data[0].homeTeam).toBe('AFC Bournemouth');
      });
  });

  it('can get this weeks games', () => {
    var data = new FootballAPI().getThisWeeksGames(2021);
    expect(data).toBeDefined();
  });
});