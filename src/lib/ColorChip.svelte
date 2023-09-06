<script>
  export let color;

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
    <div class="text-left col-6">
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

    {#if color.hsv.h < 50 && color.hsv.h < 120}
      <div class="text-right col">Skin Tone?</div>
    {/if}
    {color.contrastWCAG21("white").toFixed(2)}
    {#if color.contrastWCAG21("white") < 4.5}
      <div class="text-right col">Legibility Fail</div>
    {/if}
  </div>
</div>

<style>
  .colorchip {
    box-shadow: none;
    background-color: var(--color);
  }
</style>
