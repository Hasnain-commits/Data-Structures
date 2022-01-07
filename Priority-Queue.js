class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  swap(val1, val2) {
    [this.values[val2], this.values[val1]] = [this.values[val1], this.values[val2]];
  }

  enqueue(val, priority) {
    let node = new Node(val, priority);
    this.values.push(node);
    this.bubbleUp();
  }

  bubbleUp() {
    let currentIdx = this.values.length - 1;
    let current = this.values[currentIdx];

    while (currentIdx > 0) {
      let parentIdx = Math.floor((currentIdx - 1) / 2);
      let parent = this.values[parentIdx];
      if (parent.priority <= current.priority) break;
      this.swap(parentIdx, currentIdx);
      currentIdx = parentIdx;
    }
  }
    dequeue() {
      let min = this.values[0];
      let max = this.values.pop();
      
      if (this.values.length > 0) {
        this.values[0] = max;
        this.trickleDown();
      }

      return min;
    }

    trickleDown() {
      let currentIdx = 0;
      let current = this.values[0];
      let length = this.values.length;

      while (true) {
        let leftChildIdx = 2 * currentIdx + 1;
        let rightChildIdx = 2 * currentIdx + 2;
        let leftChild = leftChildIdx > length ? null : this.values[leftChildIdx];
        let rightChild = rightChildIdx > length ? null : this.values[rightChildIdx];
        let swap = null;

        if (leftChild && leftChild.priority <= current.priority) {
          swap = leftChildIdx;
        } 

        if (rightChild && (!swap && rightChild.priority < current.priority) || (swap && rightChild.priority < leftChild.priority)) {
          swap = leftChildIdx;
        }

        if (!swap) break;

        this.swap(swap, currentIdx);
        currentIdx = swap;
      }

    }
  
}
