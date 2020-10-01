<script lang="ts">
  import dayjs from 'dayjs';
  import type { ITeam } from '../../data/ITeam';

  let rows: ITeam[] = [
    {
      teamName: "Sheffield Wednesday",
      points: 100,
      won: 30,
      drawn: 10,
      lost: 6,
      played: 46,
      against: 50,
      for: 100,
      position: 1
    },
    {
      teamName: "Sheffield Wednesday",
      points: 100,
      won: 30,
      drawn: 10,
      lost: 6,
      played: 46,
      against: 50,
      for: 100,
      position: 2
    }
  ];
  let page: number = 1;
</script>

<style>
  .title {
    display: grid;
    grid-template-columns: auto 70px;
  }

  .table-header {
    padding-top: 3vh;
    padding-bottom: 3vh;
    display: grid;
    grid-template-columns: auto repeat(7, 50px);
    grid-gap: 10px;
  }

  .table-row {
    display: grid;
    grid-template-columns: 1fr auto repeat(7, 1fr);
    grid-gap: 10px;
  }

  .table-row:nth-child(even) {
    color: #00ffff;
  }

  .right-align {
    text-align: center;
  }
</style>

<div>
  <div class="title">
    <p class="green">SKYBET CHAMPIONSHIP</p>
    <p>{page}/2</p>
  </div>
  <div class="table-header">
    <p>{dayjs().format('MMM DD')}</p>
    <p>P</p>
    <p>W</p>
    <p>D</p>
    <p>L</p>
    <p>F</p>
    <p>A</p>
    <p>Pts</p>
  </div>
  {#each rows as row}
    <div class="table-row">
      <p class="right-align">{row.position}</p>
      <p>{row.teamName.substring(0, 10)}</p>
      <p>{row.played}</p>
      <p>{row.won}</p>
      <p>{row.drawn}</p>
      <p>{row.lost}</p>
      <p>{row.for}</p>
      <p>{row.against}</p>
      <p class="right-align">{row.points}</p>
    </div>
  {/each}
</div>
