<script>
  import Gradient from "./Gradient.svelte";

  import ColorChip from "./ColorChip.svelte";

  export let palette;
  export let flags = true;

  import { darktone, midtone } from "./colortests";

  let noGood = false;
</script>

{#each palette.colors as color}
  <div class="container" id="palettes">
    <div class="row">
      <div class="col-4">
        <div class="row">
          <ColorChip {color} />
        </div>
        <div class="row">
          <ColorChip color={midtone(color)} />
        </div>
        <div class="row">
          <ColorChip color={darktone(color)} />
        </div>
      </div>
      <div class="col-4">
        <Gradient {color} />
      </div>
      <!-- <p class="col bb text-left">Color Thief Palette:</p>
      <p class="col bb text-left">Midtone</p>
      <p class="col bb text-left">Dark</p> -->
    </div>
  </div>
{/each}

<style>
  .container {
  }
  .gradient {
    background-color: aqua;
  }
  .bb {
    color: var(--color-grey);
    border-bottom: solid 1px var(--color-grey);
  }
</style>
