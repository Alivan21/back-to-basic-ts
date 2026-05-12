import Array from "./array";

export default function MainArray() {
  const array = new Array<number>(5);

  console.log("Array length:", array.size);
  console.log("Array data:", array.toString());
}
