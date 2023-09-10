<script>
  export let saturationValue = 1;
  export let brightnessValue = 1;
  export let hueValue = 0;

  export function handleClick() {}
</script>

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
    <label class="col-2 float-left is-vertical-align" for="hue">Sat</label>
    <input
      class="col-2 float-left"
      id="hue"
      type="text"
      bind:value={saturationValue}
    />
    <input
      class="col"
      id="saturation"
      type="range"
      bind:value={saturationValue}
      min="-100"
      max="100"
      step="1"
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
      min="-100"
      max="100"
      step="1"
    />
  </div>
</div>

<style>
</style>
