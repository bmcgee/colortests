<script>
  import ColorThief from "colorthief";
  import PaletteDisplay from "./PaletteDisplay.svelte";
  import { ColorPalette } from "./palette";
  const colorThief = new ColorThief();

  let upImage, fileinput;
  let palette = new ColorPalette();
  let secondPalette = new ColorPalette();

  let token = "url";

  let url =
    "Music125/v4/fd/fd/8c/fdfd8c26-b8f9-4768-41d3-b24773250c65/886446605814.jpg";
  let loaded = false;
  let displayImage;

  let hueValue;
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

  function handleClick() {
    url = "https://is1-ssl.mzstatic.com/image/thumb/" + token + "/300x300.png";
    displayImage.src = url;
    console.log(url);

    const img = new Image();
    img.src = url;
    img.crossOrigin = "Anonymous";
    img
      .decode()
      .then(() => {
        palette.createPalette(img, 10);
        secondPalette.createPalette(img, 10);
        loaded = true;
      })
      .catch((encodingError) => {
        console.log(encodingError);
      });
  }

  $: sat(saturationValue);
  $: bright(brightnessValue);
</script>

<div class="container" id="loader">
  <div class="row is-full-width">
    <input class="col is-full-width" bind:value={token} />
    <button class="col is-full-width" on:click={handleClick}> Load </button>
  </div>
</div>

<div class="container" id="image and controls">
  <div class="row">
    <div class="col">
      <img bind:this={displayImage} src="" />
    </div>
    {#if loaded}
      <div class="col">
        <div class="container" id="controls">
          <div class="row">
            <label for="saturation">Saturation [{saturationValue}]:</label>
            <input
              id="saturation"
              type="range"
              bind:value={saturationValue}
              min="0"
              max="3"
              step="0.01"
            />
          </div>
          <div class="row">
            <label for="bright">Brightness [{brightnessValue}]:</label>
            <input
              id="bright"
              type="range"
              bind:value={brightnessValue}
              min="0"
              max="3"
              step="0.01"
            />
          </div>
        </div>
      </div>
    {/if}
  </div>
</div>

{#if loaded}
  <div class="container" id="palettes">
    <div class="row is-full-width col-12">
      <div class="col">
        <PaletteDisplay {palette} />
      </div>
      <div class="col">
        <PaletteDisplay palette={secondPalette} />
      </div>
    </div>
  </div>
{/if}

<style>
</style>
