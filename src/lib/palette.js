import ColorThief from "colorthief";
import Color from "colorjs.io";
const colorthief = new ColorThief();

class ColorPalette {
  constructor() {
    this.colors = [];
    this.size = 0;
  }
  fill(imageURL, size) {}

  //   create(imageURL, number) {
  //     //convert imageUrl to image for thief
  //     let img = new Image();

  //     img.crossOrigin = "Anonymous";
  //     img.src = imageURL;

  //     img.addEventListener("load", () => {
  //       this.createPalette(img, number);
  //     });
  //     return this.colors;
  //   }

  createPalette(img, number) {
    colorthief.getPalette(img, number).forEach((c) => {
      this.colors.push(new Color("srgb", [c[0] / 255, c[1] / 255, c[2] / 255]));
    });
  }

  saturate(saturationValue) {
    this.colors.forEach((color, index) => {
      console.log(this.colors[index].hsv.v);
      this.colors[index].hsv.s *= saturationValue;
    });
  }

  callName() {
    console.log("name");
  }
}

export { ColorPalette };
