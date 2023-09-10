<script>
  export let color;
  export let index;
  export let flags;
  import { skintone, contrast } from "./colortests";
</script>

<div class="container">
  <div class="row is-vertical-align">
    <!-- Color Info -->
    <div class="col-4 text-size text-left">
      H: {color.hsl.h.toPrecision(3)} <br />
      S: {color.hsl.s.toPrecision(3)} <br />
      L: {color.hsl.l.toPrecision(3)} <br />
      {color.to("srgb").toString({ format: "hex" })}
    </div>

    <!-- Color Dot -->
    <div
      class="col-8 text-white is-center is-vertical-align chip"
      style="--color: {color.toString()}"
    >
      <div class="row is-vertical-align">
        <p class="col text-large">Aa</p>
        {#if contrast(color)}
          <div class="text-medium col error is-center">
            {color.contrastWCAG21("white").toFixed(1)}&nbsp;
            <img
              src="https://icongr.am/material/alert-circle-outline.svg?size=25&color=ffffff"
            />
          </div>
        {:else if !contrast(color)}
          <div class="text-medium col success is-center">
            {color.contrastWCAG21("white").toFixed(1)}
          </div>
        {/if}
      </div>
    </div>

    <!-- Tests -->
    <!-- <div class="col-3">
      <div class="row">
        {#if skintone(color)}
          <div class="button secondary">Skin?</div>
        {/if}
      </div>
      <div class="row">
        {#if contrast(color)}
          <div class="button error">
            {color.contrastWCAG21("white").toFixed(1)}
          </div>
        {:else if !contrast(color)}
          <div class="button success">
            {color.contrastWCAG21("white").toFixed(1)}
          </div>
        {/if}
      </div>
    </div>
     -->
  </div>
</div>

<style>
  .chip {
    background-color: var(--color);
    height: 100%;
    padding: 0;
    margin: 0;
    border-radius: 0.5em;
  }
  .button {
    /* padding: 1em; */
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    aspect-ratio: 1;
    text-align: center;
  }
  .text-size {
    font-size: 1.2em;
    line-height: 1.2em;
  }
  .overflow {
    text-overflow: ellipsis;
  }
  .text-large {
    font-size: 3em;
    font-weight: bold;
  }
  .text-medium {
    font-size: 1.5em;
  }
</style>
