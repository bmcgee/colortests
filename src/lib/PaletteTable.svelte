<script>
  import ColorDot from "./ColorDot.svelte";

  import ColorInfoTable from "./ColorInfoTable.svelte";

  export let palette;
</script>

  <table class="striped">
    {#each palette.colors as color}
      <tr>
        <td>
          <ColorInfoTable {color} />
        </td>
        <td>
          <ColorDot {color} />
        </td>
        <td> <ColorDot {color} /> </td>
        <td> <ColorDot {color} /> </td>
      </tr>
      <tr colspan="3">
        <td colspan="4" class="gradient">GRADIENT</td>
      </tr>
    {/each}
  </table>
</div>

<style>

  .gradient {
    background-color: aqua;
  }
</style>
