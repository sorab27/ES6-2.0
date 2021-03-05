const radius = 5;
const height = 6;
const length = 2;
const width = 3;

function areaCircle(radius) {
  return 3.14 * radius * radius;
}

function areaRect(length, width) {
  return length * width;
}

function areaCylinder(radius, height) {
  return 2 * 3.14 * radius * height + 2 * 3.14 * Math.pow(radius, 2);
}

export { radius, height, length, width, areaCircle, areaCylinder, areaRect };
