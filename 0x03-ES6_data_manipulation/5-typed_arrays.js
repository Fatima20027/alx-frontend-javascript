export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const dataView = new DataView(buffer);

  dataView.setInt8(position, value);
  if (!value) {
    return 'Position outside range';
  }
  return dataView;
}

console.log(createInt8TypedArray(10, 2, 89));
