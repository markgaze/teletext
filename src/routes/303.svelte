<script context="module" lang="ts">
  import dayjs from 'dayjs';

  export async function preload(page: any, session: any) {
    const authToken: string = '6ef3af956d7f4c6e9db971d4fe244334';
    const url: string = 'https://api.football-data.org/v2';
    const compId: string = "2016";

    const compRes = await this.fetch(`${url}/competitions/${compId}`, {
      headers: {
        'X-Auth-Token': authToken
      }
    });
    const compData = await compRes.json();
    const matchday: number = compData.currentSeason.currentMatchday;
    const competitionName: string = compData.name;

    const res = await this.fetch(`${url}/competitions/${compId}/matches/?matchday=${matchday}`, {
        headers: {
          'X-Auth-Token': authToken
        }
      });
      const games = await res.json();
      return {
        gameData: games.matches.map((g: any) => {
            return {
              homeTeam: g.homeTeam.name.replace(' FC', '').replace(' AFC', '').replace('AFC ', ''),
              homeTeamScore: g.score.fullTime.homeTeam,
              homeScorers: [],
              awayTeam: g.awayTeam.name.replace(' FC', '').replace(' AFC', '').replace('AFC ', ''),
              awayTeamScore: g.score.fullTime.awayTeam,
              awayScorers: [],
              kickoffTime: g.utcDate,
            };
          })
          .sort((a: IScore, b: IScore) => {
            if (dayjs(a.kickoffTime).isBefore(b.kickoffTime, "day")) {
              return -1;
            }

            if (dayjs(a.kickoffTime).isAfter(b.kickoffTime, "day")) {
              return 1;
            } 
            
            return a.homeTeam.localeCompare(b.homeTeam)
          }),
        competitionName,
    };
  }
</script>

<script lang="ts">
  import type IScore from "../data/IScore";
  import { onDestroy } from "svelte";
  import { getTeamName } from '../data/TeamName';

  export let gameData: IScore[];
  export let competitionName: string;
  
  let page: number = 1;

  $: half = gameData.length / 2;
  $: games = gameData.slice(half * (page - 1), half * page);

  const interval = setInterval(() => page = (page === 1 ? 2 : 1), 10000);

  onDestroy(() => clearInterval(interval));

  const convertDateToKickoffTime = (gameDate: string): string => {
    const now = dayjs();
    const date = dayjs(gameDate);
    if (date.isBefore(now)) {
      return '';
    } else if (date.isAfter(now)) {
      if (date.diff(now, "week") < 1) {
        return date.format("ddd");
      } else {
        return date.format("DD/MM");
      }
    } else {
      return date.format("HH:MM");
    }
  }

  const maxLength: number = 15;
</script>

<style>
  .results > * + * {
    margin-top: 1.5rem;
  }

  .title {
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;
  }

  .score {
    display: flex;
    justify-content: space-between;
  }

  .scoreline {
    text-align: center;
    width: 10%;
  }

  .team {
    white-space: normal;
    width: 35%;
  }

  .kickoff {
    text-align: right;
    width: 5rem;
  }
</style>

<div>
  <div class="title">
    <p class="green">{competitionName}</p>
    <p>{page}/2</p>
  </div>
  <div class="results">
    {#each games as game}
    <div class="score">
      <p class="cyan team">{getTeamName(game.homeTeam.toUpperCase(), maxLength)}</p>
      <p class="scoreline">{
        game.homeTeamScore !== null ? game.homeTeamScore : ""
      }{
        convertDateToKickoffTime(game.kickoffTime) === '' && (game.homeTeamScore !== null && game.awayTeamScore !== null) ? "-" : "v"
      }{
        game.awayTeamScore !== null ? game.awayTeamScore: ""
      }</p>
      <p class="cyan team">{getTeamName(game.awayTeam.toUpperCase(), maxLength)}</p>
      <p class="kickoff">{convertDateToKickoffTime(game.kickoffTime)}</p>
    </div>
    {/each}
  </div>
</div>
