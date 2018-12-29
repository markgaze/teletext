import FootballAPI from './football-data';
import * as FetchMock from 'fetch-mock';
import ScoreModel from '../../components/score/score.model';
import TableModel from '../../components/table/table.model';

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

    FetchMock.mock('glob:https://api.football-data.org/v2/competitions/*', {
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
        'year': '2018',
        'currentMatchday': 30,
        'numberOfMatchdays': 38,
        'numberOfTeams': 20,
        'numberOfGames': 380,
        'lastUpdated': '2018-03-08T11:00:01Z'
      }
    });

    FetchMock.mock('glob:https://api.football-data.org/v2/competitions/*/standings', {
      status: 200,
      body: {
        'filters': {},
        'competition': {
            'id': 2021,
            'area': {
                'id': 2072,
                'name': 'England'
            },
            'name': 'Premier League',
            'code': 'PL',
            'plan': 'TIER_ONE',
            'lastUpdated': '2018-08-23T11:51:26Z'
        },
        'season': {
            'id': 151,
            'startDate': '2018-08-10',
            'endDate': '2019-05-12',
            'currentMatchday': 3,
            'availableStages': [
                'REGULAR_SEASON'
            ]
        },
        'standings': [
          {
              'stage': 'REGULAR_SEASON',
              'type': 'TOTAL',
              'group': null,
              'table': [
                  {
                      'position': 1,
                      'team': {
                          'id': 65,
                          'name': 'Manchester City FC',
                          'crestUrl': 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg'
                      },
                      'playedGames': 2,
                      'won': 2,
                      'draw': 0,
                      'lost': 0,
                      'points': 6,
                      'goalsFor': 8,
                      'goalsAgainst': 1,
                      'goalDifference': 7
                  },
                  {
                      'position': 2,
                      'team': {
                          'id': 64,
                          'name': 'Liverpool FC',
                          'crestUrl': 'http://upload.wikimedia.org/wikipedia/de/0/0a/FC_Liverpool.svg'
                      },
                      'playedGames': 2,
                      'won': 2,
                      'draw': 0,
                      'lost': 0,
                      'points': 6,
                      'goalsFor': 6,
                      'goalsAgainst': 0,
                      'goalDifference': 6
                  },
                  {
                      'position': 3,
                      'team': {
                          'id': 61,
                          'name': 'Chelsea FC',
                          'crestUrl': 'http://upload.wikimedia.org/wikipedia/de/5/5c/Chelsea_crest.svg'
                      },
                      'playedGames': 2,
                      'won': 2,
                      'draw': 0,
                      'lost': 0,
                      'points': 6,
                      'goalsFor': 6,
                      'goalsAgainst': 2,
                      'goalDifference': 4
                  },
                  {
                      'position': 4,
                      'team': {
                          'id': 346,
                          'name': 'Watford FC',
                          'crestUrl': 'https://upload.wikimedia.org/wikipedia/en/e/e2/Watford.svg'
                      },
                      'playedGames': 2,
                      'won': 2,
                      'draw': 0,
                      'lost': 0,
                      'points': 6,
                      'goalsFor': 5,
                      'goalsAgainst': 1,
                      'goalDifference': 4
                  },
                  {
                      'position': 5,
                      'team': {
                          'id': 73,
                          'name': 'Tottenham Hotspur FC',
                          'crestUrl': 'http://upload.wikimedia.org/wikipedia/de/b/b4/Tottenham_Hotspur.svg'
                      },
                      'playedGames': 2,
                      'won': 2,
                      'draw': 0,
                      'lost': 0,
                      'points': 6,
                      'goalsFor': 5,
                      'goalsAgainst': 2,
                      'goalDifference': 3
                  },
                  {
                      'position': 6,
                      'team': {
                          'id': 1044,
                          'name': 'AFC Bournemouth',
                          'crestUrl': 'https://upload.wikimedia.org/wikipedia/de/4/41/Afc_bournemouth.svg'
                      },
                      'playedGames': 2,
                      'won': 2,
                      'draw': 0,
                      'lost': 0,
                      'points': 6,
                      'goalsFor': 4,
                      'goalsAgainst': 1,
                      'goalDifference': 3
                  },
                  {
                      'position': 7,
                      'team': {
                          'id': 62,
                          'name': 'Everton FC',
                          'crestUrl': 'http://upload.wikimedia.org/wikipedia/de/f/f9/Everton_FC.svg'
                      },
                      'playedGames': 2,
                      'won': 1,
                      'draw': 1,
                      'lost': 0,
                      'points': 4,
                      'goalsFor': 4,
                      'goalsAgainst': 3,
                      'goalDifference': 1
                  },
                  {
                      'position': 8,
                      'team': {
                          'id': 338,
                          'name': 'Leicester City FC',
                          'crestUrl': 'http://upload.wikimedia.org/wikipedia/en/6/63/Leicester02.png'
                      },
                      'playedGames': 2,
                      'won': 1,
                      'draw': 0,
                      'lost': 1,
                      'points': 3,
                      'goalsFor': 3,
                      'goalsAgainst': 2,
                      'goalDifference': 1
                  },
                  {
                      'position': 9,
                      'team': {
                          'id': 66,
                          'name': 'Manchester United FC',
                          'crestUrl': 'http://upload.wikimedia.org/wikipedia/de/d/da/Manchester_United_FC.svg'
                      },
                      'playedGames': 2,
                      'won': 1,
                      'draw': 0,
                      'lost': 1,
                      'points': 3,
                      'goalsFor': 4,
                      'goalsAgainst': 4,
                      'goalDifference': 0
                  },
                  {
                      'position': 10,
                      'team': {
                          'id': 354,
                          'name': 'Crystal Palace FC',
                          'crestUrl': 'http://upload.wikimedia.org/wikipedia/de/b/bf/Crystal_Palace_F.C._logo_%282013%29.png'
                      },
                      'playedGames': 2,
                      'won': 1,
                      'draw': 0,
                      'lost': 1,
                      'points': 3,
                      'goalsFor': 2,
                      'goalsAgainst': 2,
                      'goalDifference': 0
                  },
                  {
                      'position': 11,
                      'team': {
                          'id': 397,
                          'name': 'Brighton & Hove Albion FC',
                          'crestUrl': 'https://upload.wikimedia.org/wikipedia/en/f/fd/Brighton_%26_Hove_Albion_logo.svg'
                      },
                      'playedGames': 2,
                      'won': 1,
                      'draw': 0,
                      'lost': 1,
                      'points': 3,
                      'goalsFor': 3,
                      'goalsAgainst': 4,
                      'goalDifference': -1
                  },
                  {
                      'position': 12,
                      'team': {
                          'id': 67,
                          'name': 'Newcastle United FC',
                          'crestUrl': 'http://upload.wikimedia.org/wikipedia/de/5/56/Newcastle_United_Logo.svg'
                      },
                      'playedGames': 2,
                      'won': 0,
                      'draw': 1,
                      'lost': 1,
                      'points': 1,
                      'goalsFor': 1,
                      'goalsAgainst': 2,
                      'goalDifference': -1
                  },
                  {
                      'position': 13,
                      'team': {
                          'id': 340,
                          'name': 'Southampton FC',
                          'crestUrl': 'http://upload.wikimedia.org/wikipedia/de/c/c9/FC_Southampton.svg'
                      },
                      'playedGames': 2,
                      'won': 0,
                      'draw': 1,
                      'lost': 1,
                      'points': 1,
                      'goalsFor': 1,
                      'goalsAgainst': 2,
                      'goalDifference': -1
                  },
                  {
                      'position': 14,
                      'team': {
                          'id': 76,
                          'name': 'Wolverhampton Wanderers FC',
                          'crestUrl': 'https://upload.wikimedia.org/wikipedia/en/f/fc/Wolverhampton_Wanderers.svg'
                      },
                      'playedGames': 2,
                      'won': 0,
                      'draw': 1,
                      'lost': 1,
                      'points': 1,
                      'goalsFor': 2,
                      'goalsAgainst': 4,
                      'goalDifference': -2
                  },
                  {
                      'position': 15,
                      'team': {
                          'id': 328,
                          'name': 'Burnley FC',
                          'crestUrl': 'https://upload.wikimedia.org/wikipedia/en/0/02/Burnley_FC_badge.png'
                      },
                      'playedGames': 2,
                      'won': 0,
                      'draw': 1,
                      'lost': 1,
                      'points': 1,
                      'goalsFor': 1,
                      'goalsAgainst': 3,
                      'goalDifference': -2
                  },
                  {
                      'position': 16,
                      'team': {
                          'id': 715,
                          'name': 'Cardiff City FC',
                          'crestUrl': 'https://upload.wikimedia.org/wikipedia/en/3/3c/Cardiff_City_crest.svg'
                      },
                      'playedGames': 2,
                      'won': 0,
                      'draw': 1,
                      'lost': 1,
                      'points': 1,
                      'goalsFor': 0,
                      'goalsAgainst': 2,
                      'goalDifference': -2
                  },
                  {
                      'position': 17,
                      'team': {
                          'id': 57,
                          'name': 'Arsenal FC',
                          'crestUrl': 'http://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg'
                      },
                      'playedGames': 2,
                      'won': 0,
                      'draw': 0,
                      'lost': 2,
                      'points': 0,
                      'goalsFor': 2,
                      'goalsAgainst': 5,
                      'goalDifference': -3
                  },
                  {
                      'position': 18,
                      'team': {
                          'id': 63,
                          'name': 'Fulham FC',
                          'crestUrl': 'http://upload.wikimedia.org/wikipedia/de/a/a8/Fulham_fc.svg'
                      },
                      'playedGames': 2,
                      'won': 0,
                      'draw': 0,
                      'lost': 2,
                      'points': 0,
                      'goalsFor': 1,
                      'goalsAgainst': 5,
                      'goalDifference': -4
                  },
                  {
                      'position': 19,
                      'team': {
                          'id': 563,
                          'name': 'West Ham United FC',
                          'crestUrl': 'http://upload.wikimedia.org/wikipedia/de/e/e0/West_Ham_United_FC.svg'
                      },
                      'playedGames': 2,
                      'won': 0,
                      'draw': 0,
                      'lost': 2,
                      'points': 0,
                      'goalsFor': 1,
                      'goalsAgainst': 6,
                      'goalDifference': -5
                  },
                  {
                      'position': 20,
                      'team': {
                          'id': 394,
                          'name': 'Huddersfield Town AFC',
                          'crestUrl': 'https://upload.wikimedia.org/wikipedia/en/5/5a/Huddersfield_Town_A.F.C._logo.svg'
                      },
                      'playedGames': 2,
                      'won': 0,
                      'draw': 0,
                      'lost': 2,
                      'points': 0,
                      'goalsFor': 1,
                      'goalsAgainst': 9,
                      'goalDifference': -8
                  }
              ]
          },
          {
              'stage': 'REGULAR_SEASON',
              'type': 'HOME',
              'group': null,
              'table': [
                  {
                      'position': 1,
                      'team': {
                          'id': 65,
                          'name': 'Manchester City FC',
                          'crestUrl': 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg'
                      },
                      'playedGames': 1,
                      'won': 1,
                      'draw': 0,
                      'lost': 0,
                      'points': 3,
                      'goalsFor': 6,
                      'goalsAgainst': 1,
                      'goalDifference': 5
                  },
                  {
                      'position': 2,
                      'team': {
                          'id': 64,
                          'name': 'Liverpool FC',
                          'crestUrl': 'http://upload.wikimedia.org/wikipedia/de/0/0a/FC_Liverpool.svg'
                      },
                      'playedGames': 1,
                      'won': 1,
                      'draw': 0,
                      'lost': 0,
                      'points': 3,
                      'goalsFor': 4,
                      'goalsAgainst': 0,
                      'goalDifference': 4
                  },
                  {
                      'position': 3,
                      'team': {
                          'id': 73,
                          'name': 'Tottenham Hotspur FC',
                          'crestUrl': 'http://upload.wikimedia.org/wikipedia/de/b/b4/Tottenham_Hotspur.svg'
                      },
                      'playedGames': 1,
                      'won': 1,
                      'draw': 0,
                      'lost': 0,
                      'points': 3,
                      'goalsFor': 3,
                      'goalsAgainst': 1,
                      'goalDifference': 2
                  },
                  {
                      'position': 4,
                      'team': {
                          'id': 338,
                          'name': 'Leicester City FC',
                          'crestUrl': 'http://upload.wikimedia.org/wikipedia/en/6/63/Leicester02.png'
                      },
                      'playedGames': 1,
                      'won': 1,
                      'draw': 0,
                      'lost': 0,
                      'points': 3,
                      'goalsFor': 2,
                      'goalsAgainst': 0,
                      'goalDifference': 2
                  },
                  {
                      'position': 5,
                      'team': {
                          'id': 346,
                          'name': 'Watford FC',
                          'crestUrl': 'https://upload.wikimedia.org/wikipedia/en/e/e2/Watford.svg'
                      },
                      'playedGames': 1,
                      'won': 1,
                      'draw': 0,
                      'lost': 0,
                      'points': 3,
                      'goalsFor': 2,
                      'goalsAgainst': 0,
                      'goalDifference': 2
                  },
                  {
                      'position': 6,
                      'team': {
                          'id': 1044,
                          'name': 'AFC Bournemouth',
                          'crestUrl': 'https://upload.wikimedia.org/wikipedia/de/4/41/Afc_bournemouth.svg'
                      },
                      'playedGames': 1,
                      'won': 1,
                      'draw': 0,
                      'lost': 0,
                      'points': 3,
                      'goalsFor': 2,
                      'goalsAgainst': 0,
                      'goalDifference': 2
                  },
                  {
                      'position': 7,
                      'team': {
                          'id': 61,
                          'name': 'Chelsea FC',
                          'crestUrl': 'http://upload.wikimedia.org/wikipedia/de/5/5c/Chelsea_crest.svg'
                      },
                      'playedGames': 1,
                      'won': 1,
                      'draw': 0,
                      'lost': 0,
                      'points': 3,
                      'goalsFor': 3,
                      'goalsAgainst': 2,
                      'goalDifference': 1
                  },
                  {
                      'position': 8,
                      'team': {
                          'id': 397,
                          'name': 'Brighton & Hove Albion FC',
                          'crestUrl': 'https://upload.wikimedia.org/wikipedia/en/f/fd/Brighton_%26_Hove_Albion_logo.svg'
                      },
                      'playedGames': 1,
                      'won': 1,
                      'draw': 0,
                      'lost': 0,
                      'points': 3,
                      'goalsFor': 3,
                      'goalsAgainst': 2,
                      'goalDifference': 1
                  },
                  {
                      'position': 9,
                      'team': {
                          'id': 62,
                          'name': 'Everton FC',
                          'crestUrl': 'http://upload.wikimedia.org/wikipedia/de/f/f9/Everton_FC.svg'
                      },
                      'playedGames': 1,
                      'won': 1,
                      'draw': 0,
                      'lost': 0,
                      'points': 3,
                      'goalsFor': 2,
                      'goalsAgainst': 1,
                      'goalDifference': 1
                  },
                  {
                      'position': 10,
                      'team': {
                          'id': 66,
                          'name': 'Manchester United FC',
                          'crestUrl': 'http://upload.wikimedia.org/wikipedia/de/d/da/Manchester_United_FC.svg'
                      },
                      'playedGames': 1,
                      'won': 1,
                      'draw': 0,
                      'lost': 0,
                      'points': 3,
                      'goalsFor': 2,
                      'goalsAgainst': 1,
                      'goalDifference': 1
                  },
                  {
                      'position': 11,
                      'team': {
                          'id': 76,
                          'name': 'Wolverhampton Wanderers FC',
                          'crestUrl': 'https://upload.wikimedia.org/wikipedia/en/f/fc/Wolverhampton_Wanderers.svg'
                      },
                      'playedGames': 1,
                      'won': 0,
                      'draw': 1,
                      'lost': 0,
                      'points': 1,
                      'goalsFor': 2,
                      'goalsAgainst': 2,
                      'goalDifference': 0
                  },
                  {
                      'position': 12,
                      'team': {
                          'id': 715,
                          'name': 'Cardiff City FC',
                          'crestUrl': 'https://upload.wikimedia.org/wikipedia/en/3/3c/Cardiff_City_crest.svg'
                      },
                      'playedGames': 1,
                      'won': 0,
                      'draw': 1,
                      'lost': 0,
                      'points': 1,
                      'goalsFor': 0,
                      'goalsAgainst': 0,
                      'goalDifference': 0
                  },
                  {
                      'position': 13,
                      'team': {
                          'id': 340,
                          'name': 'Southampton FC',
                          'crestUrl': 'http://upload.wikimedia.org/wikipedia/de/c/c9/FC_Southampton.svg'
                      },
                      'playedGames': 1,
                      'won': 0,
                      'draw': 1,
                      'lost': 0,
                      'points': 1,
                      'goalsFor': 0,
                      'goalsAgainst': 0,
                      'goalDifference': 0
                  },
                  {
                      'position': 14,
                      'team': {
                          'id': 67,
                          'name': 'Newcastle United FC',
                          'crestUrl': 'http://upload.wikimedia.org/wikipedia/de/5/56/Newcastle_United_Logo.svg'
                      },
                      'playedGames': 1,
                      'won': 0,
                      'draw': 0,
                      'lost': 1,
                      'points': 0,
                      'goalsFor': 1,
                      'goalsAgainst': 2,
                      'goalDifference': -1
                  },
                  {
                      'position': 15,
                      'team': {
                          'id': 563,
                          'name': 'West Ham United FC',
                          'crestUrl': 'http://upload.wikimedia.org/wikipedia/de/e/e0/West_Ham_United_FC.svg'
                      },
                      'playedGames': 1,
                      'won': 0,
                      'draw': 0,
                      'lost': 1,
                      'points': 0,
                      'goalsFor': 1,
                      'goalsAgainst': 2,
                      'goalDifference': -1
                  },
                  {
                      'position': 16,
                      'team': {
                          'id': 328,
                          'name': 'Burnley FC',
                          'crestUrl': 'https://upload.wikimedia.org/wikipedia/en/0/02/Burnley_FC_badge.png'
                      },
                      'playedGames': 1,
                      'won': 0,
                      'draw': 0,
                      'lost': 1,
                      'points': 0,
                      'goalsFor': 1,
                      'goalsAgainst': 3,
                      'goalDifference': -2
                  },
                  {
                      'position': 17,
                      'team': {
                          'id': 63,
                          'name': 'Fulham FC',
                          'crestUrl': 'http://upload.wikimedia.org/wikipedia/de/a/a8/Fulham_fc.svg'
                      },
                      'playedGames': 1,
                      'won': 0,
                      'draw': 0,
                      'lost': 1,
                      'points': 0,
                      'goalsFor': 0,
                      'goalsAgainst': 2,
                      'goalDifference': -2
                  },
                  {
                      'position': 18,
                      'team': {
                          'id': 57,
                          'name': 'Arsenal FC',
                          'crestUrl': 'http://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg'
                      },
                      'playedGames': 1,
                      'won': 0,
                      'draw': 0,
                      'lost': 1,
                      'points': 0,
                      'goalsFor': 0,
                      'goalsAgainst': 2,
                      'goalDifference': -2
                  },
                  {
                      'position': 19,
                      'team': {
                          'id': 354,
                          'name': 'Crystal Palace FC',
                          'crestUrl': 'http://upload.wikimedia.org/wikipedia/de/b/bf/Crystal_Palace_F.C._logo_%282013%29.png'
                      },
                      'playedGames': 1,
                      'won': 0,
                      'draw': 0,
                      'lost': 1,
                      'points': 0,
                      'goalsFor': 0,
                      'goalsAgainst': 2,
                      'goalDifference': -2
                  },
                  {
                      'position': 20,
                      'team': {
                          'id': 394,
                          'name': 'Huddersfield Town AFC',
                          'crestUrl': 'https://upload.wikimedia.org/wikipedia/en/5/5a/Huddersfield_Town_A.F.C._logo.svg'
                      },
                      'playedGames': 1,
                      'won': 0,
                      'draw': 0,
                      'lost': 1,
                      'points': 0,
                      'goalsFor': 0,
                      'goalsAgainst': 3,
                      'goalDifference': -3
                  }
              ]
          },
          {
              'stage': 'REGULAR_SEASON',
              'type': 'AWAY',
              'group': null,
              'table': [
                  {
                      'position': 1,
                      'team': {
                          'id': 61,
                          'name': 'Chelsea FC',
                          'crestUrl': 'http://upload.wikimedia.org/wikipedia/de/5/5c/Chelsea_crest.svg'
                      },
                      'playedGames': 1,
                      'won': 1,
                      'draw': 0,
                      'lost': 0,
                      'points': 3,
                      'goalsFor': 3,
                      'goalsAgainst': 0,
                      'goalDifference': 3
                  },
                  {
                      'position': 2,
                      'team': {
                          'id': 346,
                          'name': 'Watford FC',
                          'crestUrl': 'https://upload.wikimedia.org/wikipedia/en/e/e2/Watford.svg'
                      },
                      'playedGames': 1,
                      'won': 1,
                      'draw': 0,
                      'lost': 0,
                      'points': 3,
                      'goalsFor': 3,
                      'goalsAgainst': 1,
                      'goalDifference': 2
                  },
                  {
                      'position': 3,
                      'team': {
                          'id': 64,
                          'name': 'Liverpool FC',
                          'crestUrl': 'http://upload.wikimedia.org/wikipedia/de/0/0a/FC_Liverpool.svg'
                      },
                      'playedGames': 1,
                      'won': 1,
                      'draw': 0,
                      'lost': 0,
                      'points': 3,
                      'goalsFor': 2,
                      'goalsAgainst': 0,
                      'goalDifference': 2
                  },
                  {
                      'position': 4,
                      'team': {
                          'id': 65,
                          'name': 'Manchester City FC',
                          'crestUrl': 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg'
                      },
                      'playedGames': 1,
                      'won': 1,
                      'draw': 0,
                      'lost': 0,
                      'points': 3,
                      'goalsFor': 2,
                      'goalsAgainst': 0,
                      'goalDifference': 2
                  },
                  {
                      'position': 5,
                      'team': {
                          'id': 354,
                          'name': 'Crystal Palace FC',
                          'crestUrl': 'http://upload.wikimedia.org/wikipedia/de/b/bf/Crystal_Palace_F.C._logo_%282013%29.png'
                      },
                      'playedGames': 1,
                      'won': 1,
                      'draw': 0,
                      'lost': 0,
                      'points': 3,
                      'goalsFor': 2,
                      'goalsAgainst': 0,
                      'goalDifference': 2
                  },
                  {
                      'position': 6,
                      'team': {
                          'id': 73,
                          'name': 'Tottenham Hotspur FC',
                          'crestUrl': 'http://upload.wikimedia.org/wikipedia/de/b/b4/Tottenham_Hotspur.svg'
                      },
                      'playedGames': 1,
                      'won': 1,
                      'draw': 0,
                      'lost': 0,
                      'points': 3,
                      'goalsFor': 2,
                      'goalsAgainst': 1,
                      'goalDifference': 1
                  },
                  {
                      'position': 7,
                      'team': {
                          'id': 1044,
                          'name': 'AFC Bournemouth',
                          'crestUrl': 'https://upload.wikimedia.org/wikipedia/de/4/41/Afc_bournemouth.svg'
                      },
                      'playedGames': 1,
                      'won': 1,
                      'draw': 0,
                      'lost': 0,
                      'points': 3,
                      'goalsFor': 2,
                      'goalsAgainst': 1,
                      'goalDifference': 1
                  },
                  {
                      'position': 8,
                      'team': {
                          'id': 62,
                          'name': 'Everton FC',
                          'crestUrl': 'http://upload.wikimedia.org/wikipedia/de/f/f9/Everton_FC.svg'
                      },
                      'playedGames': 1,
                      'won': 0,
                      'draw': 1,
                      'lost': 0,
                      'points': 1,
                      'goalsFor': 2,
                      'goalsAgainst': 2,
                      'goalDifference': 0
                  },
                  {
                      'position': 9,
                      'team': {
                          'id': 67,
                          'name': 'Newcastle United FC',
                          'crestUrl': 'http://upload.wikimedia.org/wikipedia/de/5/56/Newcastle_United_Logo.svg'
                      },
                      'playedGames': 1,
                      'won': 0,
                      'draw': 1,
                      'lost': 0,
                      'points': 1,
                      'goalsFor': 0,
                      'goalsAgainst': 0,
                      'goalDifference': 0
                  },
                  {
                      'position': 10,
                      'team': {
                          'id': 328,
                          'name': 'Burnley FC',
                          'crestUrl': 'https://upload.wikimedia.org/wikipedia/en/0/02/Burnley_FC_badge.png'
                      },
                      'playedGames': 1,
                      'won': 0,
                      'draw': 1,
                      'lost': 0,
                      'points': 1,
                      'goalsFor': 0,
                      'goalsAgainst': 0,
                      'goalDifference': 0
                  },
                  {
                      'position': 11,
                      'team': {
                          'id': 57,
                          'name': 'Arsenal FC',
                          'crestUrl': 'http://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg'
                      },
                      'playedGames': 1,
                      'won': 0,
                      'draw': 0,
                      'lost': 1,
                      'points': 0,
                      'goalsFor': 2,
                      'goalsAgainst': 3,
                      'goalDifference': -1
                  },
                  {
                      'position': 12,
                      'team': {
                          'id': 66,
                          'name': 'Manchester United FC',
                          'crestUrl': 'http://upload.wikimedia.org/wikipedia/de/d/da/Manchester_United_FC.svg'
                      },
                      'playedGames': 1,
                      'won': 0,
                      'draw': 0,
                      'lost': 1,
                      'points': 0,
                      'goalsFor': 2,
                      'goalsAgainst': 3,
                      'goalDifference': -1
                  },
                  {
                      'position': 13,
                      'team': {
                          'id': 338,
                          'name': 'Leicester City FC',
                          'crestUrl': 'http://upload.wikimedia.org/wikipedia/en/6/63/Leicester02.png'
                      },
                      'playedGames': 1,
                      'won': 0,
                      'draw': 0,
                      'lost': 1,
                      'points': 0,
                      'goalsFor': 1,
                      'goalsAgainst': 2,
                      'goalDifference': -1
                  },
                  {
                      'position': 14,
                      'team': {
                          'id': 340,
                          'name': 'Southampton FC',
                          'crestUrl': 'http://upload.wikimedia.org/wikipedia/de/c/c9/FC_Southampton.svg'
                      },
                      'playedGames': 1,
                      'won': 0,
                      'draw': 0,
                      'lost': 1,
                      'points': 0,
                      'goalsFor': 1,
                      'goalsAgainst': 2,
                      'goalDifference': -1
                  },
                  {
                      'position': 15,
                      'team': {
                          'id': 63,
                          'name': 'Fulham FC',
                          'crestUrl': 'http://upload.wikimedia.org/wikipedia/de/a/a8/Fulham_fc.svg'
                      },
                      'playedGames': 1,
                      'won': 0,
                      'draw': 0,
                      'lost': 1,
                      'points': 0,
                      'goalsFor': 1,
                      'goalsAgainst': 3,
                      'goalDifference': -2
                  },
                  {
                      'position': 16,
                      'team': {
                          'id': 76,
                          'name': 'Wolverhampton Wanderers FC',
                          'crestUrl': 'https://upload.wikimedia.org/wikipedia/en/f/fc/Wolverhampton_Wanderers.svg'
                      },
                      'playedGames': 1,
                      'won': 0,
                      'draw': 0,
                      'lost': 1,
                      'points': 0,
                      'goalsFor': 0,
                      'goalsAgainst': 2,
                      'goalDifference': -2
                  },
                  {
                      'position': 17,
                      'team': {
                          'id': 715,
                          'name': 'Cardiff City FC',
                          'crestUrl': 'https://upload.wikimedia.org/wikipedia/en/3/3c/Cardiff_City_crest.svg'
                      },
                      'playedGames': 1,
                      'won': 0,
                      'draw': 0,
                      'lost': 1,
                      'points': 0,
                      'goalsFor': 0,
                      'goalsAgainst': 2,
                      'goalDifference': -2
                  },
                  {
                      'position': 18,
                      'team': {
                          'id': 397,
                          'name': 'Brighton & Hove Albion FC',
                          'crestUrl': 'https://upload.wikimedia.org/wikipedia/en/f/fd/Brighton_%26_Hove_Albion_logo.svg'
                      },
                      'playedGames': 1,
                      'won': 0,
                      'draw': 0,
                      'lost': 1,
                      'points': 0,
                      'goalsFor': 0,
                      'goalsAgainst': 2,
                      'goalDifference': -2
                  },
                  {
                      'position': 19,
                      'team': {
                          'id': 563,
                          'name': 'West Ham United FC',
                          'crestUrl': 'http://upload.wikimedia.org/wikipedia/de/e/e0/West_Ham_United_FC.svg'
                      },
                      'playedGames': 1,
                      'won': 0,
                      'draw': 0,
                      'lost': 1,
                      'points': 0,
                      'goalsFor': 0,
                      'goalsAgainst': 4,
                      'goalDifference': -4
                  },
                  {
                      'position': 20,
                      'team': {
                          'id': 394,
                          'name': 'Huddersfield Town AFC',
                          'crestUrl': 'https://upload.wikimedia.org/wikipedia/en/5/5a/Huddersfield_Town_A.F.C._logo.svg'
                      },
                      'playedGames': 1,
                      'won': 0,
                      'draw': 0,
                      'lost': 1,
                      'points': 0,
                      'goalsFor': 1,
                      'goalsAgainst': 6,
                      'goalDifference': -5
                  }
              ]
          }
        ]
      }
    });
  });

  afterAll(FetchMock.restore);

  it('can get last weeks games', async () => {
    const data: ScoreModel[] = await new FootballAPI().getLastWeeksGames(2021);
    expect(data).toBeDefined();
  });

  it('can get correct scores', async () => {
    const data: ScoreModel[] = await new FootballAPI().getLastWeeksGames(2021);
    expect(data).toBeDefined();
    expect(data[0]).toBeDefined();
    expect(data[0].homeTeam).toBe('AFC Bournemouth');
  });

  it('can get this weeks games', async () => {
    const data: ScoreModel[] = await new FootballAPI().getThisWeeksGames(2021);
    expect(data).toBeDefined();
    expect(data[0]).toBeDefined();
    expect(data[0].homeTeam).toBe('AFC Bournemouth');
  });

  it('can get league standings', async () => {
    const data: TableModel = await new FootballAPI().getStandings(2021);
    expect(data).toBeDefined();
  });
});