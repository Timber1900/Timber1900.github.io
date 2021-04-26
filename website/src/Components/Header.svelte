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
    <div class="svg-div github" tooltip="Github">
      <GithubLogo />
    </div>
    <div class="svg-div" tooltip="Discord">
      <DiscordLogo />
    </div>
    <div class="svg-div" tooltip="Steam">
      <SteamLogo />
    </div>
    <div class="svg-div" tooltip="Youtube">
      <YoutubeLogo />
    </div>
    <div class="svg-div" tooltip="Twitch">
      <TwitchLogo />
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
  }

  .svg-div::after {
    content: attr(tooltip);
    padding: 0;
    width: 0;
    color: #eeeeee00;
    transition: all cubic-bezier(.68,-0.55,.27,1.55) 0.5s;
  }

  .svg-div:hover::after {
    content: attr(tooltip);
    width: 5ch;
    color: #eeeeeeff;
    padding: 0 0 0 2ch;
  }
</style>