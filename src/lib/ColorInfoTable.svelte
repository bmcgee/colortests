<script>
  import { wcagContrast } from "culori";
  import { skintone } from "./colortests";

  export let color;

  let skin = skintone(color);
  let wcag = false;

  if (color.contrastWCAG21("white") >= 4.5) {
    wcag = true;
  }
</script>

<table class="striped mono">
  <tr>
    <td class="text-grey">H</td><td>{color.hsl[0].toPrecision(3)}</td>
  </tr>
  <tr>
    <td class="text-grey">S</td><td>{color.hsl[1].toPrecision(3)}</td>
  </tr>
  <tr>
    <td class="text-grey">L</td><td>{color.hsl[2].toPrecision(3)}</td>
  </tr>
  <tr>
    <td>
      <img
        class:skin
        src="https://icongr.am/clarity/avatar.svg?size=20&color=000000"
      />
      <img
        class:wcag
        src="https://icongr.am/clarity/check-circle.svg?size=20&color=000000"
      />
    </td>
    <td class="" colspan="">{color.to("srgb").toString({ format: "hex" })}</td>
  </tr>
</table>

<style>
  .gradient {
    background-color: aqua;
  }
  .mono {
    font-family: monospace;
    font-size: 1.2em;
    line-height: 0.3em;
  }
  img {
    opacity: 15%;
    margin: 0px;
    padding: 0px;
  }
  .skin,
  .wcag {
    opacity: 100%;
  }
</style>
