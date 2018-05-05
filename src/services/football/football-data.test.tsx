import FootballAPI from './football-data';
import * as FetchMock from 'fetch-mock';
import ScoreModel from '../../components/score/score.model';

describe('Football Data API', () => {
  beforeAll(() => {
    FetchMock.mock('glob:https://api.football-data.org/v1/competitions/*/fixtures/?matchday=*', {
      status: 200,
      body: {
        '_links': {
          'self': {
            'href': 'http://api.football-data.org/v1/competitions/445/fixtures'
          },
          'competition': {
            'href': 'http://api.football-data.org/v1/competitions/445'
          }
        },
        'count': 10,
        'fixtures': [{
            '_links': {
              'self': {
                'href': 'http://api.football-data.org/v1/fixtures/159051'
              },
              'competition': {
                'href': 'http://api.football-data.org/v1/competitions/445'
              },
              'homeTeam': {
                'href': 'http://api.football-data.org/v1/teams/338'
              },
              'awayTeam': {
                'href': 'http://api.football-data.org/v1/teams/70'
              }
            },
            'date': '2018-02-24T12:30:00Z',
            'status': 'FINISHED',
            'matchday': 28,
            'homeTeamName': 'Leicester City FC',
            'awayTeamName': 'Stoke City FC',
            'result': {
              'goalsHomeTeam': 1,
              'goalsAwayTeam': 1,
              'halfTime': {
                'goalsHomeTeam': 0,
                'goalsAwayTeam': 1
              }
            },
            'odds': null
          },
          {
            '_links': {
              'self': {
                'href': 'http://api.football-data.org/v1/fixtures/159055'
              },
              'competition': {
                'href': 'http://api.football-data.org/v1/competitions/445'
              },
              'homeTeam': {
                'href': 'http://api.football-data.org/v1/teams/74'
              },
              'awayTeam': {
                'href': 'http://api.football-data.org/v1/teams/394'
              }
            },
            'date': '2018-02-24T15:00:00Z',
            'status': 'FINISHED',
            'matchday': 28,
            'homeTeamName': 'West Bromwich Albion FC',
            'awayTeamName': 'Huddersfield Town',
            'result': {
              'goalsHomeTeam': 1,
              'goalsAwayTeam': 2,
              'halfTime': {
                'goalsHomeTeam': 0,
                'goalsAwayTeam': 0
              }
            },
            'odds': null
          },
          {
            '_links': {
              'self': {
                'href': 'http://api.football-data.org/v1/fixtures/159046'
              },
              'competition': {
                'href': 'http://api.football-data.org/v1/competitions/445'
              },
              'homeTeam': {
                'href': 'http://api.football-data.org/v1/teams/1044'
              },
              'awayTeam': {
                'href': 'http://api.football-data.org/v1/teams/67'
              }
            },
            'date': '2018-02-24T15:00:00Z',
            'status': 'FINISHED',
            'matchday': 28,
            'homeTeamName': 'AFC Bournemouth',
            'awayTeamName': 'Newcastle United FC',
            'result': {
              'goalsHomeTeam': 2,
              'goalsAwayTeam': 2,
              'halfTime': {
                'goalsHomeTeam': 0,
                'goalsAwayTeam': 2
              }
            },
            'odds': null
          },
          {
            '_links': {
              'self': {
                'href': 'http://api.football-data.org/v1/fixtures/159048'
              },
              'competition': {
                'href': 'http://api.football-data.org/v1/competitions/445'
              },
              'homeTeam': {
                'href': 'http://api.football-data.org/v1/teams/397'
              },
              'awayTeam': {
                'href': 'http://api.football-data.org/v1/teams/72'
              }
            },
            'date': '2018-02-24T15:00:00Z',
            'status': 'FINISHED',
            'matchday': 28,
            'homeTeamName': 'Brighton & Hove Albion',
            'awayTeamName': 'Swansea City FC',
            'result': {
              'goalsHomeTeam': 4,
              'goalsAwayTeam': 1,
              'halfTime': {
                'goalsHomeTeam': 1,
                'goalsAwayTeam': 0
              }
            },
            'odds': null
          },
          {
            '_links': {
              'self': {
                'href': 'http://api.football-data.org/v1/fixtures/159052'
              },
              'competition': {
                'href': 'http://api.football-data.org/v1/competitions/445'
              },
              'homeTeam': {
                'href': 'http://api.football-data.org/v1/teams/64'
              },
              'awayTeam': {
                'href': 'http://api.football-data.org/v1/teams/563'
              }
            },
            'date': '2018-02-24T15:00:00Z',
            'status': 'FINISHED',
            'matchday': 28,
            'homeTeamName': 'Liverpool FC',
            'awayTeamName': 'West Ham United FC',
            'result': {
              'goalsHomeTeam': 4,
              'goalsAwayTeam': 1,
              'halfTime': {
                'goalsHomeTeam': 1,
                'goalsAwayTeam': 0
              }
            },
            'odds': null
          },
          {
            '_links': {
              'self': {
                'href': 'http://api.football-data.org/v1/fixtures/159049'
              },
              'competition': {
                'href': 'http://api.football-data.org/v1/competitions/445'
              },
              'homeTeam': {
                'href': 'http://api.football-data.org/v1/teams/328'
              },
              'awayTeam': {
                'href': 'http://api.football-data.org/v1/teams/340'
              }
            },
            'date': '2018-02-24T15:00:00Z',
            'status': 'FINISHED',
            'matchday': 28,
            'homeTeamName': 'Burnley FC',
            'awayTeamName': 'Southampton FC',
            'result': {
              'goalsHomeTeam': 1,
              'goalsAwayTeam': 1,
              'halfTime': {
                'goalsHomeTeam': 0,
                'goalsAwayTeam': 0
              }
            },
            'odds': null
          },
          {
            '_links': {
              'self': {
                'href': 'http://api.football-data.org/v1/fixtures/159054'
              },
              'competition': {
                'href': 'http://api.football-data.org/v1/competitions/445'
              },
              'homeTeam': {
                'href': 'http://api.football-data.org/v1/teams/346'
              },
              'awayTeam': {
                'href': 'http://api.football-data.org/v1/teams/62'
              }
            },
            'date': '2018-02-24T17:30:00Z',
            'status': 'FINISHED',
            'matchday': 28,
            'homeTeamName': 'Watford FC',
            'awayTeamName': 'Everton FC',
            'result': {
              'goalsHomeTeam': 1,
              'goalsAwayTeam': 0,
              'halfTime': {
                'goalsHomeTeam': 0,
                'goalsAwayTeam': 0
              }
            },
            'odds': null
          },
          {
            '_links': {
              'self': {
                'href': 'http://api.football-data.org/v1/fixtures/159050'
              },
              'competition': {
                'href': 'http://api.football-data.org/v1/competitions/445'
              },
              'homeTeam': {
                'href': 'http://api.football-data.org/v1/teams/354'
              },
              'awayTeam': {
                'href': 'http://api.football-data.org/v1/teams/73'
              }
            },
            'date': '2018-02-25T12:00:00Z',
            'status': 'FINISHED',
            'matchday': 28,
            'homeTeamName': 'Crystal Palace FC',
            'awayTeamName': 'Tottenham Hotspur FC',
            'result': {
              'goalsHomeTeam': 0,
              'goalsAwayTeam': 1,
              'halfTime': {
                'goalsHomeTeam': 0,
                'goalsAwayTeam': 0
              }
            },
            'odds': null
          },
          {
            '_links': {
              'self': {
                'href': 'http://api.football-data.org/v1/fixtures/159053'
              },
              'competition': {
                'href': 'http://api.football-data.org/v1/competitions/445'
              },
              'homeTeam': {
                'href': 'http://api.football-data.org/v1/teams/66'
              },
              'awayTeam': {
                'href': 'http://api.football-data.org/v1/teams/61'
              }
            },
            'date': '2018-02-25T14:05:00Z',
            'status': 'FINISHED',
            'matchday': 28,
            'homeTeamName': 'Manchester United FC',
            'awayTeamName': 'Chelsea FC',
            'result': {
              'goalsHomeTeam': 2,
              'goalsAwayTeam': 1,
              'halfTime': {
                'goalsHomeTeam': 1,
                'goalsAwayTeam': 1
              }
            },
            'odds': null
          },
          {
            '_links': {
              'self': {
                'href': 'http://api.football-data.org/v1/fixtures/159047'
              },
              'competition': {
                'href': 'http://api.football-data.org/v1/competitions/445'
              },
              'homeTeam': {
                'href': 'http://api.football-data.org/v1/teams/57'
              },
              'awayTeam': {
                'href': 'http://api.football-data.org/v1/teams/65'
              }
            },
            'date': '2018-03-01T19:45:00Z',
            'status': 'FINISHED',
            'matchday': 28,
            'homeTeamName': 'Arsenal FC',
            'awayTeamName': 'Manchester City FC',
            'result': {
              'goalsHomeTeam': 0,
              'goalsAwayTeam': 3,
              'halfTime': {
                'goalsHomeTeam': 0,
                'goalsAwayTeam': 3
              }
            },
            'odds': null
          }
        ]
      }
    });

    FetchMock.mock('glob:https://api.football-data.org/v1/competitions/*', {
      status: 200,
      body: {
        '_links': {
          'self': {
            'href': 'http://api.football-data.org/v1/competitions/445'
          },
          'teams': {
            'href': 'http://api.football-data.org/v1/competitions/445/teams'
          },
          'fixtures': {
            'href': 'http://api.football-data.org/v1/competitions/445/fixtures'
          },
          'leagueTable': {
            'href': 'http://api.football-data.org/v1/competitions/445/leagueTable'
          }
        },
        'id': 445,
        'caption': 'Premier League 2017/18',
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
    var data = new FootballAPI().getLastWeeksGames(445);
    expect(data).toBeDefined();
  });

  it('can get correct scores', () => {
    new FootballAPI()
      .getLastWeeksGames(445)
      .then((data: ScoreModel[]) => {
        expect(data).toBeDefined();
        expect(data[0]).toBeDefined();
        expect(data[0].homeTeam).toBe('AFC Bournemouth');
      });
  });

  it('can get this weeks games', () => {
    var data = new FootballAPI().getThisWeeksGames(445);
    expect(data).toBeDefined();
  });
});