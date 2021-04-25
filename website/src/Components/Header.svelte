<script lang="ts">
  import GithubLogo from "./GithubLogo.svelte";
  import DiscordLogo from "./DiscordLogo.svelte";
  import SteamLogo from "./SteamLogo.svelte";
</script>

<header class="text-primary-color dark-primary-color">
  <h1>Timber's Github Projects</h1>
  <div class="icons-outer">
    <div>
      <GithubLogo />
    </div>
    <div>
      <DiscordLogo />
    </div>
    <div>
      <SteamLogo />
    </div>
  </div>
</header>

<style>
  header {
    padding: 1em;
    grid-column: 1 / 4;
    grid-template-columns: auto 1fr;
    display: grid;
  }
  
  .icons-outer {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    height: 100%;
    padding: 0 5em;
  }

  .icons-outer > div {
    padding: 0 1em;
  }
</style>