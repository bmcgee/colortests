<script>
  export let saturationValue = 1;
  export let brightnessValue = 1;
  export let hueValue = 1;
</script>

<div class="col">
  <div class="container" id="controls">
    <div class="row">
      <label class="col-2 is-vertical-align" for="hue">Hue</label>
      <input class="col-2" id="hue" type="text" bind:value={hueValue} />
      <input
        class="col"
        id="hue"
        type="range"
        bind:value={hueValue}
        min="-180"
        max="180"
        step="1"
      />
    </div>
    <div class="row">
      <label class="col-2 is-vertical-align" for="hue">Sat</label>
      <input class="col-2" id="hue" type="text" bind:value={saturationValue} />
      <input
        class="col"
        id="saturation"
        type="range"
        bind:value={saturationValue}
        min="0"
        max="3"
        step="0.01"
      />
    </div>
    <div class="row">
      <label class="col-2 is-vertical-align" for="hue">Bright</label>
      <input class="col-2" id="hue" type="text" bind:value={brightnessValue} />
      <input
        class="col"
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

<style>
</style>
