<script>
  export let color;

  import ColorDot from "./ColorDot.svelte";
  import ColorInfoTable from "./ColorInfoTable.svelte";
  import { skintone, contrast } from "./colortests";
</script>

<div class="container">
  <div class="row">
    <div class="col">
      <ColorDot {color} />
    </div>
  </div>
  <div class="row">
    <div class="col">
      <ColorInfoTable {color} />
    </div>
  </div>
</div>

<style>
</style>
