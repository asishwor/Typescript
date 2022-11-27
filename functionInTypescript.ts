// Function in typescript
// example :

// define function return type
function getTime(): number {
  return new Date().getTime();
}
console.log(getTime());
//define function prams type like this 👇
function calculation(a: number): number {
  return 12;
}
// Optional parameters
function multiply(a: number, b: number, c?: number): number {
  return a * b * (c || 1);
}
console.log(multiply(12, 15));

// rest parameter
function added(a: number, b: number, c: number, ...rest: number[]) {
  return a + b + c + rest.reduce((accumulator, data) => accumulator + data, 0);
}
console.log(added(12, 14, 15, 11, 5));
