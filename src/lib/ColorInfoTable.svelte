<script>
  export let color;
</script>

<table>
  <tr>
    <td>H</td><td>{color.hsv[0].toPrecision(3)}</td>
  </tr>
  <tr>
    <td>S</td><td>{color.hsv[1].toPrecision(3)}</td>
  </tr>
  <tr>
    <td>V</td><td>{color.hsv[2].toPrecision(3)}</td>
  </tr>
</table>

<style>
  .gradient {
    background-color: aqua;
  }
</style>
