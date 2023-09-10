import ColorThief from "colorthief";
import Color from "colorjs.io";
const colorthief = new ColorThief();

class ColorPalette {
  constructor(colors) {
    this.colors = [];
    this.originalColors = [];
  }

  fill(colors) {
    this.colors = colors;
    this.originalColors = [...colors];
  }

  adjust(hue, sat, light) {
    this.originalColors.forEach((c, index) => {
      let color = new Color("hsl", [
        c.hsl.h + hue,
        c.hsl.s + sat,
        c.hsl.l + light,
      ]);
      this.colors[index] = color;
    });
  }
  getMid() {
    let p = new ColorPalette();
    this.colors.forEach((color, i) => {
      let c = new Color(color);
      c.hsl.h += -6;
      c.hsl.s *= 1.16;
      c.hsl.l *= 0.5;
      p.colors.push(c);
    });
    return p;
  }

  getDark() {
    let p = new ColorPalette();
    this.colors.forEach((color, i) => {
      let c = new Color(color);
      c.hsl.h += 6;
      c.hsl.s *= 1.16;
      c.hsl.l *= 0.2;
      p.colors.push(c);
    });
    return p;
  }

  reset() {
    this.colors = [...this.originalColors];
  }

  //clone
  clone() {
    return new ColorPalette(this.colors);
  }
}

export { ColorPalette };
