import { ColorPalette } from "./palette";
import Color from "colorjs.io";

export let skintone = (color) => {
  let lowH = 10;
  let highH = 30;
  let lowS = 20;
  let highS = 75;
  let lowV = 27;
  let highV = 80;

  if (color.hsv.h > lowH && color.hsv.h <= highH) {
    if (color.hsv.s > lowS && color.hsv.s <= highS) {
      if (color.hsv.v > lowV && color.hsv.v <= highV) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
};

export let contrast = (color) => {
  if (color.contrastWCAG21("white") < 4.5) {
    return true;
  } else {
    return false;
  }
};

export let sortPalette = (palette) => {
  const skinTones = new ColorPalette();
  const lowContrast = new ColorPalette();
  const safe = new ColorPalette();

  for (let color of palette.colors) {
    if (skintone(color)) {
      // skinTones.colors.push(color);
    } else if (contrast(color)) {
      lowContrast.colors.push(color);
    } else {
      safe.colors.push(color);
    }
  }
  return [skinTones, lowContrast, safe];
};

export let midtone = (color) => {
  let c = new Color(color);
  c.hsl.h += -6;
  c.hsl.s += 16;
  c.hsl.l *= 0.5;
  return c;
};

export let darktone = (color) => {
  let c = new Color(color);
  c.hsl.h += 6;
  c.hsl.s += 16;
  c.hsl.l *= 0.2;
  return c;
};
