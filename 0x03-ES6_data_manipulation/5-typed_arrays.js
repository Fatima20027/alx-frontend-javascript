export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const dataView = new DataView(buffer);

  dataView.setInt8(position, value);
  if (position <= 0 || position >= length) {
    return new Error('Position outside range');
  }
  return dataView;
}
