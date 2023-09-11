<script>
  import { onMount } from "svelte";
  import { darktone, midtone } from "./colortests";

  export let color;
  let gradImage;

  onMount(() => {
    gradImage.src = document.getElementById("mainImage").src;
  });
</script>

<div
  class="container card gradient rounded is-horizontal-align vert"
  style="--color: {color.toString() +
    ', ' +
    midtone(color).toString() +
    ', ' +
    midtone(color).toString()}"
>
  <div
    class=" rounded"
    style="--color: {color.toString() +
      ', ' +
      midtone(color).toString() +
      ', ' +
      midtone(color).toString()}"
  >
    <div class="row">
      <div class="col">
        <h1 class="text-white text-left">
          The quick brown fox jumps over the lazy dog.
        </h1>
      </div>
    </div>
    <div class="row is-center">
      <div class="col-8">
        <img class="rounded" bind:this={gradImage} src="" />
      </div>
    </div>
    <div class="row"><div class="col" /></div>
    <div class="row is-horizontal-align">
      <div class="card rounded blurred col-10">
        <h3 class="text-white text-left">
          The quick brown fox jumps over the lazy dog.
        </h3>
      </div>
    </div>
  </div>
</div>

<style>
  .vert {
    align-items: center;
  }
  .card {
    box-shadow: none;
  }
  .blurred {
    background: rgba(241, 241, 233, 0.24);
    line-height: 2em;
  }
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .gradient {
    aspect-ratio: 9/16;
    background: linear-gradient(var(--color));
  }
  .rounded {
    border-radius: calc(var(--grid-gutter) / 6);
  }
  h1 {
    font-size: 2.5em;
  }
</style>
