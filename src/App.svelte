<script>
  import "chota";

  import ColorThief from "colorthief";
  const colorThief = new ColorThief();
  import { converter, formatCss, rgb, filterSaturate } from "culori";

  import { createLoadObserver } from "./lib/utils";
  import Palette from "./lib/PaletteDisplay.svelte";
  import DragDrop from "./lib/DragDrop.svelte";

  let img;
  let thiefPalette = [];
  let rgbPalette = [];
  let okPalette = [];
  let loaded = false;

  let saturationValue = 1;
  let saturate = filterSaturate(1.5, "rgb");

  // const onload = createLoadObserver(() => {
  //   colorThief.getPalette(img, 10).forEach((color) => {
  //     let rgbColor = {
  //       mode: "rgb",
  //       r: color[0] / 255,
  //       g: color[1] / 255,
  //       b: color[2] / 255,
  //     };
  //     thiefPalette.push(rgbColor);
  //   });
  //   console.log(thiefPalette);
  //   rgbPalette = [...thiefPalette];
  //   loaded = true;
  // });

  // $: console.log(thiefPalette);
  // $: saturate = filterSaturate(saturationValue, "rgb");
  // $: thiefPalette.forEach((color, index) => {
  //   rgbPalette[index] = saturate(color);
  //   console.log(color);
  // });
</script>

<main class="is-full-width row">
  <DragDrop />
</main>

<style>
  :root {
    --grid-maxWidth: 500rem;
    --font-family-sans: -apple-system, "BlinkMacSystemFont", "Avenir";
  }
</style>
