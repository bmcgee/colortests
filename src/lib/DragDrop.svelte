<script>
  import Controls from "./Controls.svelte";

  import ColorThief from "colorthief";
  import Color from "colorjs.io";

  import PaletteDisplay from "./PaletteDisplay.svelte";
  import { ColorPalette } from "./palette";
  import { sortPalette } from "./colortests";

  const colorThief = new ColorThief();

  let palette = new ColorPalette([]);

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
        // colorThief.getPalette(img, 10).forEach((c) => {
        //   colors.push(new Color("srgb", [c[0] / 255, c[1] / 255, c[2] / 255]));
        // });
        let c = colorThief.getColor(img, 5);
        colors.push(new Color("srgb", [c[0] / 255, c[1] / 255, c[2] / 255]));
        palette.fill(colors);
        loaded = true;
      })
      .catch((encodingError) => {
        console.log(encodingError);
      });

    //Sort Palettes
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
    <input class="col-8" bind:value={token} />
    <button class="col-4" on:click={handleClick}> Load </button>
  </div>
</div>

<div class="container is-full-width" id="controls">
  <div class="row">
    <div class="col-4">
      <img id="mainImage" bind:this={displayImage} src="" />
    </div>
    <div class="col-8">
      <Controls bind:saturationValue bind:brightnessValue bind:hueValue />
      <button class="row is-right primary button" on:click={resetPalette}>
        Reset HSL
      </button>
    </div>
  </div>
</div>
{#if loaded}
  <PaletteDisplay {palette} />
{/if}

<style>
  #controls {
    border-bottom: 1px solid var(--color-lightGrey);
  }
  img {
    border-radius: calc(var(--grid-gutter) / 6);
    width: 100%;
  }
</style>
