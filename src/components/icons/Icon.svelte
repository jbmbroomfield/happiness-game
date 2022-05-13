<script>
  import Apple from "./Apple.svelte";

  export let name;

  let cls = $$props.class;

  const IconComponent = {
    apple: Apple,
  }[name];
</script>

<span class={cls}>
  <svelte:component this={IconComponent} />
</span>
