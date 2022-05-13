<script>
  import Apple from "./Apple.svelte";
  import FaceHappy from "./FaceHappy.svelte";
  import House from "./House.svelte";

  export let name;

  let cls = $$props.class;

  const IconComponent = {
    apple: Apple,
    faceHappy: FaceHappy,
    house: House,
  }[name];
</script>

<span class={cls}>
  <svelte:component this={IconComponent} />
</span>
