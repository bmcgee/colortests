<script>
  export let color;
  export let index;
  export let flags;
  import { skintone, contrast } from "./colortests";

  $: console.log(color.contrastWCAG21("white") < 4.5);
</script>

<div
  class="colorchip col card text-left text-white"
  style="--color: {color.toString()}"
>
  <div class="row">
    <!-- <div class="col col-1 is-left text-left">{index + 1}</div> -->
    <div class="overflow text-left float-left col">
      {color.to("srgb").toString({
        precision: 2,
        format: {
          name: "RGB",
          coords: ["<number>[0, 255]", "<number>[0, 255]", "<number>[0, 255]"],
        },
      })}
      <br />

      {color.to("hsv").toString({
        precision: 3,

        format: {
          name: "HSV",
          coords: ["<number>", "<number>", "<number>"],
        },
      })}
      <br />
      {color.to("srgb").toString({ format: "hex" })}
    </div>
    <!-- <div class="col is-right is-vertical-align">
        {#if skintone(color)}
          <div class="secondary">Skin?</div>
        {/if}
      </div> -->
    <div class="col-1 is-right">
      {#if contrast(color)}
        <div class="error">
          {color.contrastWCAG21("white").toFixed(1)}
        </div>
      {:else if !contrast(color)}
        <div class="success">
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
  .overflow {
    text-overflow: ellipsis;
  }
</style>
