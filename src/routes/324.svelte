<script context="module" lang="ts">
  export async function preload(page: any, session: any) {
    const authToken: string = '6ef3af956d7f4c6e9db971d4fe244334';
    const url: string = 'https://api.football-data.org/v2';
    const compId: string = "2016";

    const res = await this.fetch(`${url}/competitions/${compId}/standings`, {
      headers: {
        'X-Auth-Token': authToken
      }
    });
    const standings = await res.json();
    let teams = standings.standings[0].table.map((t: any) => {
      return {
        position: t.position,
        teamName: t.team.name.replace(' FC', '').replace(' AFC', ''),
        played: t.playedGames,
        won: t.won,
        drawn: t.draw,
        lost: t.lost,
        for: t.goalsFor,
        against: t.goalsAgainst,
        points: t.points
      };
    });

    return {
      lastUpdated: new Date(standings.competition.lastUpdated),
      table: teams
    };
  }
</script>

<script lang="ts">
  import dayjs from 'dayjs';
  import { onDestroy } from 'svelte';
  import type { ITeam } from '../data/ITeam';

  export let table: ITeam[];
  export let lastUpdated: Date;

  let page: number = 1;
  let rows: ITeam[] = [];
  let half: number;
  
  $: half = table.length / 2;
  $: rows = table.slice(half * (page - 1), half * page);

  const interval = setInterval(() => page = (page === 1 ? 2 : 1), 10000);

  onDestroy(() => clearInterval(interval));
</script>

<style>
  .table {
    text-align: right;
  }

  .title {
    display: flex;
    justify-content: space-between;
  }

  .table-header {
    padding-top: 3vh;
    padding-bottom: 3vh;
    display: grid;
    grid-template-columns: auto repeat(6, 35px) 50px;
    grid-gap: 10px;
  }

  .table-row {
    display: grid;
    grid-template-columns: 50px auto repeat(6, 35px) 50px;
    grid-gap: 10px;
  }

  .table-row:nth-child(even) {
    color: #00ffff;
  }

  .center-align {
    text-align: center;
  }

  .left-align {
    text-align: left;
  }
</style>

<div>
  <div class="title">
    <p class="green">SKYBET CHAMPIONSHIP</p>
    <p>{page}/2</p>
  </div>
  <div class="table">
    <div class="table-header">
      <p class="left-align">{dayjs(lastUpdated).format('MMM DD')}</p>
      <p>P</p>
      <p>W</p>
      <p>D</p>
      <p>L</p>
      <p>F</p>
      <p>A</p>
      <p>PTS</p>
    </div>
    {#each rows as row}
      <div class="table-row">
        <p class="center-align">{row.position}</p>
        <p class="left-align">{row.teamName.substring(0, 16)}</p>
        <p>{row.played}</p>
        <p>{row.won}</p>
        <p>{row.drawn}</p>
        <p>{row.lost}</p>
        <p>{row.for}</p>
        <p>{row.against}</p>
        <p>{row.points}</p>
      </div>
    {/each}
  </div>
</div>
