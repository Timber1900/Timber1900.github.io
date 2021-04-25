<script lang="ts">
  import GithubLogo from "./GithubLogo.svelte";
  import DiscordLogo from "./DiscordLogo.svelte";
  import SteamLogo from "./SteamLogo.svelte";
  import YoutubeLogo from "./YoutubeLogo.svelte";
  import TwitchLogo from "./TwitchLogo.svelte";

</script>

<header class="text-primary-color dark-primary-color">
  <h1>Timber's Github Projects</h1>
  <div class="icons-outer">
    <div class="svg-div">
      <GithubLogo />
      <p>Github</p>
    </div>
    <div class="svg-div">
      <DiscordLogo />
      <p>Discord</p>
    </div>
    <div class="svg-div">
      <SteamLogo />
      <p>Steam</p>
    </div>
    <div class="svg-div">
      <YoutubeLogo />
      <p>Youtube</p>
    </div>
    <div class="svg-div">
      <TwitchLogo />
      <p>Twitch</p>
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

  .svg-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    white-space: nowrap;
  }

  .svg-div > p {
    margin: 0;
    padding: 0 0 0 0;
    width: 0;
    overflow: hidden;
    transition: all ease 0.5s;
    border-radius: 2ch;
    color: #eeeeee00;
  }

  .svg-div:hover > p {
    padding: 0 0 0 2ch;
    width: 8ch;
    color: #eeeeeeff;
  }
</style>