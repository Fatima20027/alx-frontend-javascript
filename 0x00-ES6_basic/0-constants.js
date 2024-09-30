export default function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

function getLast() {
  return ' is okay';
}

function taskNext() {
  let componation = 'But sometimes let';
  componation += getLast();

  return componation;
}

console.log(`${taskFirst()} ${taskNext()}`);
