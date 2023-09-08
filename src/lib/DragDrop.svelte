<script>
  import Controls from "./Controls.svelte";

  import ColorThief from "colorthief";
  import PaletteDisplay from "./PaletteDisplay.svelte";
  import { ColorPalette } from "./palette";
  import { sortPalette } from "./colortests";
  const colorThief = new ColorThief();
  import { mid, dark } from "./colortests";

  let upImage, fileinput;
  let palette = new ColorPalette();
  let secondPalette = new ColorPalette();
  let sortedPalettes = [];

  let token =
    "Features125/v4/0e/10/96/0e10963d-8c5d-f176-3651-796ec44d0c97/mzl.kdlmyecx.jpg";

  let url =
    "Music125/v4/fd/fd/8c/fdfd8c26-b8f9-4768-41d3-b24773250c65/886446605814.jpg";
  let loaded = false;
  let displayImage;

  let hueValue = 0;
  let saturationValue = 1;
  let brightnessValue = 1;

  function sat(saturationValue) {
    palette.colors.forEach((color, i) => {
      secondPalette.colors[i].hsv.s = palette.colors[i].hsv.s * saturationValue;
    });
    secondPalette = secondPalette;
  }

  function bright(brightnessValue) {
    palette.colors.forEach((color, i) => {
      secondPalette.colors[i].hsv.v = palette.colors[i].hsv.v * brightnessValue;
    });
    secondPalette = secondPalette;
  }

  function hue(hueValue) {
    palette.colors.forEach((color, i) => {
      secondPalette.colors[i].hsv.h = palette.colors[i].hsv.h + hueValue;
    });
    secondPalette = secondPalette;
  }

  function handleClick() {
    if (!token.startsWith("http")) {
      url =
        "https://is1-ssl.mzstatic.com/image/thumb/" + token + "/300x300.png";
    } else {
      url = token;
    }
    displayImage.src = url;
    console.log(url);

    // palette = palette.fill();
    // secondPalette = secondPalette.fill();

    const img = new Image();
    img.src = url;
    img.crossOrigin = "Anonymous";
    img
      .decode()
      .then(() => {
        palette.createPalette(img, 6);
        secondPalette.createPalette(img, 6);
        sortedPalettes = sortPalette(palette);
        loaded = true;
      })
      .catch((encodingError) => {
        console.log(encodingError);
      });

    //Sort Palettes
    sortedPalettes = sortPalette(secondPalette);
  }
  $: hue(hueValue);
  $: sortedPalettes = sortPalette(secondPalette);
  $: sat(saturationValue);
  $: sortedPalettes = sortPalette(secondPalette);
  $: bright(brightnessValue);
  $: sortedPalettes = sortPalette(secondPalette);
</script>

<div class="container" id="loader">
  <div class="row is-full-width">
    <input class="col is-full-width" bind:value={token} />
    <button class="col is-full-width" on:click={handleClick}> Load </button>
  </div>
</div>

<div class="container" id="image and controls">
  <div class="row">
    <div class="col-3">
      <img bind:this={displayImage} src="" />
    </div>
    {#if loaded}
      <div class="col">
        <Controls bind:saturationValue bind:brightnessValue bind:hueValue />
      </div>
    {/if}
  </div>
</div>

{#if loaded}
  <div class="container" id="palettes">
    <div class="row is-full-width col-12">
      <div class="col-3">
        <p class="text-left">Color Thief Palette:</p>
        <hr />
        <PaletteDisplay {palette} flags={false} />
      </div>
      <div class="col">
        <p class="text-left">Acceptable:</p>
        <hr />
        <PaletteDisplay palette={sortedPalettes[2]} />
        <p class="text-left">Low Contrast:</p>
        <hr />
        <PaletteDisplay palette={sortedPalettes[1]} />
        <p class="text-left">Skintone?</p>
        <hr />
        <PaletteDisplay palette={sortedPalettes[0]} />
      </div>
      <div class="col-3">
        <p class="text-left">Midtone</p>
        <hr />
        <PaletteDisplay palette={mid(sortedPalettes[2])} flags={false} />
      </div>
      <div class="col-3">
        <p class="text-left">Dark</p>
        <hr />
        <PaletteDisplay palette={dark(sortedPalettes[2])} flags={false} />
      </div>
    </div>
  </div>
{/if}

<style>
</style>
