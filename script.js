function Queue() {
  let collection = [];

  this.print = function () {
    console.log(collection);
  };

  this.enqueue = function (data) {
    collection.push(data);
  };

  this.dequeue = function () {
    return collection.shift();
  };
  this.front = function () {
    return collection[0];
  };

  this.isEmpty = function () {
    return collection.length === 0;
  };

  this.size = function () {
    return collection.length;
  };
}
let queue = new Queue();
queue.enqueue("a");
queue.enqueue("b");
queue.enqueue("c");
queue.print();
queue.dequeue();
queue.print();
