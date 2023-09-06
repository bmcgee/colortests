<script>
  export let color;
  export let index;

  let skintone = false;
  let illegal = false;

  $: if (color.contrastWCAG21("white") < 4.5) {
    illegal = true;
  } else {
    illegal = false;
  }

  $: if (color.hsv.h < 50 && color.hsv.h < 120) {
    skintone = true;
  } else {
    illegal = false;
  }
  $: console.log(color.contrastWCAG21("white") < 4.5);
</script>

<div
  class="colorchip col card text-left text-white"
  style="--color: {color.toString()}"
>
  <div class="row">
    <div class="col col-1 is-left text-left">{index}</div>
    <div class="text-left float-left col">
      {color.to("srgb").toString({
        format: {
          name: "RGB",
          coords: ["<number>[0, 255]", "<number>[0, 255]", "<number>[0, 255]"],
        },
      })}
      <br />

      {color.to("hsv").toString({
        format: {
          name: "HSV",
          coords: ["<number>", "<number>", "<number>"],
        },
      })}
      <!-- {color.to("hsv").toString()} -->
      <br />
      {color.to("srgb").toString({ format: "hex" })}
    </div>
    <div class="col-2 is-vertical-align">
      {#if color.hsv.h < 50 && color.hsv.h < 120}
        <div class="button seoncdary">Skin Tone?</div>
      {/if}
    </div>
    <div class="col is-right">
      {#if color.contrastWCAG21("white") < 4.5}
        <div class="button error">
          {color.contrastWCAG21("white").toFixed(1)}
        </div>
      {:else if color.contrastWCAG21("white") >= 4.5}
        <div class="button success">
          {color.contrastWCAG21("white").toFixed(1)}
        </div>
      {/if}
    </div>
  </div>
</div>

<style>
  .colorchip {
    box-shadow: none;
    background-color: var(--color);
  }
</style>
