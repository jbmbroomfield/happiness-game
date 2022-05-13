<script>
  import Map from "./Map.svelte";
</script>

<Map />

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  /* purgecss end ignore */
  @tailwind utilities;

  @layer utilities {
    .ml-55 {
      margin-left: 55%;
    }
  }
</style>
