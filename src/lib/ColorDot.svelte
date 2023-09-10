<script>
  export let color;
</script>

<div class="dot is-rounded" style="--color: {color.toString()}">Aa</div>

<style>
  .dot {
    background-color: var(--color);
    height: 100%;
    padding: 0;
    margin: 0;
    border-radius: 0.5em;
  }
</style>
