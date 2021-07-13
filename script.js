class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  //insert last Node
  insertLast(data) {
    let node = new Node(data);

    let current;

    //head is empty so insert first node
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size++;
  }

  //insert at index
  insertAt(data, index) {
    if (index === 0) {
      this.insertFirst(data);
      return;
    } else if (index > 0 && index > this.size) {
      return;
    } else {
      let node = new Node(data);
      let count = 0;
      let current = this.head;
      let previous;
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      node.next = current;
      previous.next = node;
      this.size++;
    }
  }
  //get index
  getAt(index) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (count == index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }
    return null;
  }

  //remove at index
  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }
    let current = this.head;
    let previous;
    let count = 0;
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }
      previous.next = current.next;
    }
    this.size--;
  }
  //clear list
  clearList() {
    this.size = 0;
    this.head = null;
  }
  //print list data
  printListData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);

ll.insertFirst(100);
ll.insertAt(150, 5);

ll.printListData();
