type nameType = string;
type ageType = number;
const city: nameType = "john doe";
const width: ageType = 120;

//Now learn about interface in typescript
interface Rectangle {
  height: number;
  width: number;
}
//now using this interface
const rectangle: Rectangle = {
  height: 120,
  width: 130,
};
console.log(rectangle.height);

//extends  this rectangle inter face to colorRectangle
interface colorRectangle extends Rectangle {
  color: string;
}
const colorBox = {
  height: 1200,
  width: 300,
  color: "yellow",
};
