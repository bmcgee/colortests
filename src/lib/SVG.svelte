<script>
  //   import svg from "./YE_Top_Album.svg";
  //   import MyLogo from "./TopAlbum.svelte";
  import MyLogo from "./TopAlbum.svelte";
  import { onMount } from "svelte";

  import { darktone, midtone } from "./colortests";

  export let color;

  let gradImageSrc ="https://is1-ssl.mzstatic.com/image/thumb/Features115/v4/17/54/32/1754321f-4d10-0445-8c63-63b9aca63241/mza_5881696461253841876.png/300x300.png";

//   onMount(() => {
// 	console.log(document.getElementById("mainImage").src);
//     gradImageSrc = document.getElementById("mainImage").src;
// 	// gradImage = document.getElementById("mainImage").src
//   });
</script>

<div
  style="
  display: contents; 
  --base-color: {color.toString()}; 
  --mid-color: {midtone(color).toString()};
  --dark-color: pink; 
  --image-url: {gradImageSrc};
  "
>
  <MyLogo class="my-logo" image={gradImageSrc} />
</div>
