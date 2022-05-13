<script>
  import MapObject from "../javascript/MapObject.js";
  import Map from "./Map.svelte";

  let mapObjects;
  $: mapObjects = MapObject.all;

  new MapObject({
    location: [2, 5],
    icon: "apple",
    color: "purple-500",
  });

  new MapObject({
    location: [20, 17],
    icon: "apple",
    color: "red-500",
  });

  new MapObject({
    location: [39, 24],
    icon: "apple",
    color: "green-500",
  });

  console.log("all", MapObject.all);
</script>

<Map obects={mapObjects} />
