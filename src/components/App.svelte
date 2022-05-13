<script>
  import Icon from "./icons/Icon.svelte";
</script>

<main>
  <Icon name="apple" class="text-red-400" />
</main>

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
