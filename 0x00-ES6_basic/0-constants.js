export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  let componation = 'But sometimes let';
  componation += getLast();

  return componation;
}
