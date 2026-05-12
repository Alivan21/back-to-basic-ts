import Array from "./array";

export default function MainArray() {
  const array = new Array<number>(5);
  array.push(1);
  array.push(2);
  array.push(3);

  array.pop();

  console.log("Array length:", array.size);
  console.log("Array data:", array.toString());
}
