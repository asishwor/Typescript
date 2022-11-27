// object in typescript
interface userTyped {
  name: string;
  age: number;
  address: string;
}
let user: userTyped = {
  name: "john",
  age: 28,
  address: "kathmandu",
};
console.log(user);
let anyTyped: any = {
  // :any =>inside this object we can can input any types of data
  name: 2852,
  address: "nepal",
  age: "ajdghj",
};
console.log(anyTyped);
