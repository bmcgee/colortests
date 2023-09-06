<script>
  import ColorChip from "./ColorChip.svelte";

  export let palette;

  import { wcagContrast, formatCss, formatHex } from "culori";

  let noGood = false;
</script>

{#each palette.colors as color}
  <div class="row">
    <ColorChip {color} />
  </div>
{/each}

<style>
  .sample {
    width: 300px;
    height: 150px;
    margin: 0.2em;
    float: left;
    font-weight: bold;
    font-size: 1.5em;
    vertical-align: middle;
  }
  .palettes {
  }
  .noGood {
    border: red 2px;
  }
</style>
