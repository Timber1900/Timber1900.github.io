<script lang="ts">
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";
  import LeftSidebar from "./LeftSidebar.svelte";
  import RightSidebar from "./RightSidebar.svelte";
  import MainContent from "./MainContent.svelte";
</script>

<div class="main-grid default-primary-color">
  <Header />
  <LeftSidebar />
  <MainContent />
  <RightSidebar />
  <Footer />
</div>

<style>
  .main-grid {
    height: 100%;
    display: grid;
    grid-template: auto 1fr auto / auto 1fr auto;
  }
</style>