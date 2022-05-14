export function setValues() {
  let x1 = { value: 76, ascending: false };
  let y1 = { value: 80, ascending: false };

  let x2 = { value: 92, ascending: false };
  let y2 = { value: 35, ascending: true };

  let x3 = { value: 27, ascending: true };
  let y3 = { value: 68, ascending: false };

  let x4 = { value: 31, ascending: true };
  let y4 = { value: 85, ascending: false };

  let x5 = { value: 18, ascending: true };
  let y5 = { value: 20, ascending: true };

  let x6 = { value: 1, ascending: true };
  let y6 = { value: 38, ascending: true };

  let x7 = { value: 23, ascending: true };
  let y7 = { value: 97, ascending: false };

  return { x1, x2, x3, x4, x5, x6, x7, y1, y2, y3, y4, y5, y6, y7 };
}

export function changeBG(elem, points) {
  const { x1, x2, x3, x4, x5, x6, x7, y1, y2, y3, y4, y5, y6, y7 } = points;
  for (let x of [x1, x2, x3, x4, x5, x6, x7]) {
    if (x.value >= 100) {
      x.ascending = false;
    }
    if (x.value <= 0) {
      x.ascending = true;
    }

    if (x.ascending) {
      x.value++;
    } else {
      x.value--;
    }
  }

  for (let y of [y1, y2, y3, y4, y5, y6, y7]) {
    if (y.value >= 100) {
      y.ascending = false;
    }
    if (y.value <= 0) {
      y.ascending = true;
    }

    if (y.ascending) {
      y.value++;
    } else {
      y.value--;
    }
  }

  let bgString = `radial-gradient(
      at ${x1.value}% ${y1.value}%,
      hsla(15, 91%, 60%, 1) 0px,
      transparent 50%
    ),
    radial-gradient(at ${x2.value}% ${y2.value}%, hsla(29, 83%, 61%, 1) 0px, transparent 50%),
    radial-gradient(at ${x3.value}% ${y3.value}%, hsla(302, 95%, 79%, 1) 0px, transparent 50%),
    radial-gradient(at ${x4.value}% ${y4.value}%, hsla(52, 81%, 73%, 1) 0px, transparent 50%),
    radial-gradient(at ${x5.value}% ${y5.value}%, #f863a3 0px, transparent 50%),
    radial-gradient(at ${x6.value}% ${y6.value}%, hsla(37, 80%, 68%, 1) 0px, transparent 50%),
    radial-gradient(at ${x7.value}% ${y7.value}%, hsla(189, 65%, 78%, 1) 0px, transparent 50%)`;

  elem.style.backgroundImage = bgString;
}

// setInterval(() => {
//   changeBG();
// }, 50);
