<script>
  import "chota";

  import DragDrop from "./lib/DragDrop.svelte";

  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    document.body.classList.add("dark");
  }
</script>

<DragDrop />

<style>
  :root {
    --bg-color: #fff;
  }

  /* :root {
    --grid-maxWidth: 500rem;
    --font-family-sans: -apple-system, "BlinkMacSystemFont", "Avenir";
  } */
</style>
