<script>
  import Gradient from "./Gradient.svelte";

  import ColorChip from "./ColorChip.svelte";

  export let palette;
  export let flags = true;

  import { darktone, midtone } from "./colortests";
  import SVG from "./SVG.svelte";

  let noGood = false;
</script>

{#each palette.colors as color}
  <div class="container is-full-width" id="palettes">
    <div class="row">
      <div class="col-2">
        <ColorChip {color} />
      </div>
      <div class="col-2">
        <ColorChip color={midtone(color)} />
      </div>
      <div class="col-2">
        <ColorChip color={darktone(color)} />
      </div>
      <div class="col-4">
        <SVG {color} />
      </div>

      <!-- <div class="col-1">
        <Gradient {color} />
      </div> -->
    </div>
  </div>
{/each}

<style>
  .container {
    padding-top: var(--grid-gutter);
  }
  .gradient {
    background-color: aqua;
  }
  .bb {
    color: var(--color-grey);
    border-bottom: solid 1px var(--color-lightGrey);
  }
</style>
