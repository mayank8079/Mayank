javascript
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
  }

  addNode(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      newNode.next = this.head;
    } else {
      let current = this.head;
      while (current.next !== this.head) {
        current = current.next;
      }
      current.next = newNode;
      newNode.next = this.head;
    }

    this.displayList();
  }

  displayList() {
    const nodeContainer = document.getElementById("node-container");
    nodeContainer.innerHTML = "";

    let current = this.head;
    do {
      const nodeElement = document.createElement("div");
      nodeElement.classList.add("node");
      nodeElement.textContent = current.data;
      nodeContainer.appendChild(nodeElement);
      current = current.next;
    } while (current !== this.head);
  }
}

const linkedList = new CircularLinkedList();
const addNodeBtn = document.getElementById("add-node-btn");

addNodeBtn.addEventListener("click", () => {
  const data = prompt("Enter data for the new node:");
  if (data !== null && data !== "") {
    linkedList.addNode(data);
  }
});