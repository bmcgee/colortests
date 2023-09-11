<script>
  export let color;
</script>

<div
  class="dot is-vertical-align is-center text-white"
  style="--color: {color.toString()}"
>
  Aa
</div>

<style>
  .dot {
    background-color: var(--color);
    aspect-ratio: 1;
    border-radius: calc(var(--grid-gutter) / 6);
  }
  div {
    font-size: 3em;
  }
</style>
