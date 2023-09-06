<script>
  import ColorChip from "./ColorChip.svelte";

  export let palette;

  import { wcagContrast, formatCss, formatHex } from "culori";

  let noGood = false;
</script>

{#each palette.colors as color, index}
  <div class="row">
    <ColorChip {color} {index} />
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
