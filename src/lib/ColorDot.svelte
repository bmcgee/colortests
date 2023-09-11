<script>
  export let color;
</script>

<div
  class="dot is-rounded is-vertical-align is-center text-white"
  style="--color: {color.toString()}"
>
  Aa
</div>

<style>
  .dot {
    background-color: var(--color);
    /* padding: 0;
    margin: 0; */
    /* border-radius: 10em; */
    aspect-ratio: 1;
  }
  div {
    font-size: 3em;
  }
</style>
