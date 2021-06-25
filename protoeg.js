let animal = {
  running: true,
};

let rabbit = {
  jump: true,
  __proto__: animal,
};

console.log(rabbit);
