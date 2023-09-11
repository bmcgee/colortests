<script>
  import { onMount } from "svelte";
  import { darktone, midtone } from "./colortests";

  export let color;
  let colorMid = midtone(color);
  let colorDark = darktone(color);
  let gradImage;

  let grad =
    color.toString() + ", " + colorMid.toString() + ", " + colorDark.toString();
  console.log(grad);

  function setImg() {
    gradImage.src = document.getElementById("mainImage").src;
  }
  onMount(() => {
    setImg();
  });
</script>

<div class="container rounded is-horizontal-align vert">
  <div class="card rounded gradient" style="--color: {grad}">
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
    border-radius: 1em;
  }
</style>
