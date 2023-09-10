<script>
  import Controls from "./Controls.svelte";

  import ColorThief from "colorthief";
  import Color from "colorjs.io";

  import PaletteDisplay from "./PaletteDisplay.svelte";
  import { ColorPalette } from "./palette";
  import { sortPalette } from "./colortests";
  const colorThief = new ColorThief();
  import PaletteTable from "./PaletteTable.svelte";

  let palette = new ColorPalette([]);
  let secondPalette = new ColorPalette([]);
  let sortedPalettes = [];

  let token =
    "Features115/v4/17/54/32/1754321f-4d10-0445-8c63-63b9aca63241/mza_5881696461253841876.png";

  let url;
  let loaded = false;
  let displayImage;

  let hueValue = 0;
  let saturationValue = 1;
  let brightnessValue = 1;

  function handleClick() {
    if (token.startsWith("http")) {
      url = token;
    } else {
      url =
        "https://is1-ssl.mzstatic.com/image/thumb/" + token + "/300x300.png";
    }
    displayImage.src = url;

    const img = new Image();
    img.src = url;
    img.crossOrigin = "Anonymous";
    img
      .decode()
      .then(() => {
        let colors = [];
        colorThief.getPalette(img, 2).forEach((c) => {
          colors.push(new Color("srgb", [c[0] / 255, c[1] / 255, c[2] / 255]));
        });

        palette.fill(colors);
        secondPalette = palette.clone();
        sortedPalettes = sortPalette(palette);
        loaded = true;
      })
      .catch((encodingError) => {
        console.log(encodingError);
      });

    //Sort Palettes
    sortedPalettes = sortPalette(secondPalette);
  }

  function adjustPalettes(hueValue, saturationValue, brightnessValue) {
    palette.adjust(hueValue, saturationValue, brightnessValue);
    palette = palette;
  }
  function resetPalette() {
    hueValue = 0;
    saturationValue = 0;
    brightnessValue = 0;
    adjustPalettes();
  }

  $: adjustPalettes(hueValue, saturationValue, brightnessValue);
</script>

<div class="container" id="loader">
  <div class="row">
    <input class="col" bind:value={token} />
    <button class="col" on:click={handleClick}> Load </button>
  </div>
</div>

<div class="container" id="image and controls">
  <div class="row">
    <img class="col-4" bind:this={displayImage} src="" />
    {#if loaded}
      <div class="col-6 clearfix float-right">
        <Controls bind:saturationValue bind:brightnessValue bind:hueValue />
        <button class="row col primary button" on:click={resetPalette}>
          Reset
        </button>
      </div>
    {/if}
  </div>
</div>

{#if loaded}
  <div class="container" id="palettes">
    <div class="row bubba">
      <div class="col">
        <p class="text-left">Color Thief Palette:</p>
        <hr />
        <PaletteDisplay {palette} flags={true} />
      </div>

      <div class="col">
        <p class="text-left">Midtone</p>
        <hr />
        <PaletteDisplay palette={palette.getMid()} flags={true} />
      </div>
      <div class="col">
        <p class="text-left">Dark</p>
        <hr />
        <PaletteDisplay palette={palette.getDark()} flags={true} />
      </div>
    </div>
    <PaletteTable {palette} />
  </div>
{/if}

<style>
</style>
