<script>
  export let saturationValue = 1;
  export let brightnessValue = 1;
  export let hueValue = 0;

  export function handleClick() {}
</script>

<div class="container is-full-width" id="controls">
  <form class="text-left">
    <p class="row grouped is-vertical-align">
      <label class="col-1" for="hue_val">Hue</label>
      <input id="hue_val" type="number" class="col-2" bind:value={hueValue} />
      <input
        id="hue"
        class="range col"
        type="range"
        bind:value={hueValue}
        min="-180"
        max="180"
        step="1"
      />
    </p>
    <p class="row grouped is-vertical-align">
      <label class="col-1" for="hue_val">Sat</label>
      <input
        id="hue_val"
        type="number"
        class="col-2"
        bind:value={saturationValue}
      />
      <input
        id="hue"
        class="range col"
        type="range"
        bind:value={saturationValue}
        min="-180"
        max="180"
        step="1"
      />
    </p>
    <p class="row grouped is-vertical-align">
      <label class="col-1" for="hue_val">Light</label>
      <input
        id="hue_val"
        type="number"
        class="col-2"
        bind:value={brightnessValue}
      />
      <input
        id="hue"
        class="range col"
        type="range"
        bind:value={brightnessValue}
        min="-180"
        max="180"
        step="1"
      />
    </p>
  </form>
</div>

<style>
  .range {
    width: 400px;
    height: 15px;
    -webkit-appearance: none;
    background: #111;
    outline: none;
    border-radius: 15px;
    overflow: hidden;
    /* box-shadow: inset 0 0 5px rgba(0, 0, 0, 1); */
  }
</style>
