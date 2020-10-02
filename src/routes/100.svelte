<script lang="ts">
	import DoubleText from "../components/DoubleText.svelte";
	import Option from "../components/Option.svelte";
</script>

<style>
	.container {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.option {
		display: flex;
		justify-content: space-between;
	}

	.columns {
		display: flex;
		gap: 1rem;
	}

	.columns > div {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
	}

	.spacer {
		height: 1rem;
	}

	.headline {
		display: flex;
		flex-direction: column;
  }
  
  .page-footer {
    text-align: center;
  }
</style>

<div class="container">
  <div class="headline">
    <p class="yellow">News</p>
    <a class="option" href="/104">
      <DoubleText text="MAIN NEWS HEADLINE GOES HERE" />
      <DoubleText text="104" foreground="yellow" />
    </a>
    <hr class="blue"/>
  </div>
  <div class="columns">
    <div>
      <Option text="A-Z HEADLINES" pageNumber="199" />
      <Option text="BBC INFO" pageNumber="695" />
      <Option text="CHILDREN" pageNumber="500" />
      <Option text="COOKERY" pageNumber="580" />
      <Option text="COMMUNITY" pageNumber="650" />
      <div class="spacer" />
      <Option text="EDUCATION" pageNumber="630" />
      <Option text="ENTERTAINMENT" pageNumber="540" />
      <Option text="FILMS" pageNumber="570" />
      <Option text="FINANCE" pageNumber="200" />
      <Option text="HORSERACING" pageNumber="660" />
      <Option text="LOTTERY" pageNumber="555" />
      <Option text="MUSIC" pageNumber="560" />
    </div>
    <div>
      <Option text="NEWS HEADLINES" pageNumber="101" />
      <Option text="NEWS FOR REGION" pageNumber="160" />
      <Option text="NEWSROUND" pageNumber="510" />
      <Option text="RADIO" pageNumber="640" />
      <Option text="READ HEAR" pageNumber="641" />
      <div class="spacer" />
      <Option text="SPORT" pageNumber="300" />
      <Option text="SUBTITLING" pageNumber="888" />
      <Option text="TRAVEL" pageNumber="430" />
      <Option text="TV FEATURES" pageNumber="590" />
      <Option text="TV LINKS" pageNumber="615" />
      <Option text="TV LISTINGS" pageNumber="600" />
      <Option text="WEATHER" pageNumber="400" />
    </div>
  </div>
  <div class="page-footer bluebg">
    <p class="yellow">Ceefax: The world at your fingertips</p>
  </div>
</div>
