class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  swap(val1, val2) {
    [this.values[val1], this.values[val2]] = [this.values[val2], this.values[val1]];
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let currentIdx = this.values.length - 1; 
    let current = this.values[currentIdx];

    while (currentIdx > 0) {
      let parentIdx = Math.floor((currentIdx - 1) / 2);
      let parent = this.values[parentIdx];
      if (parent >= current) break;
      this.swap(parentIdx, currentIdx);
      currentIdx = parentIdx;
    }
  }

  extractMax() {
    let max = this.values[0];
    let min = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = min;
      this.trickleDown();
    }

    return max;
  }

  trickleDown() {
    let currentIdx = 0;
    let current = this.values[currentIdx];
    let length = this.values.length;

    while (true) {
      let leftChildIdx = 2 * currentIdx + 1;
      let rightChildIdx = 2 * currentIdx + 2;
      let leftChild = leftChildIdx > length ? null : this.values[leftChildIdx];
      let rightChild = rightChildIdx > length ? null : this.values[rightChildIdx];
      let swapIdx = null;

      if (leftChild && leftChild > current) {
        swapIdx = leftChildIdx;
      }

      if (rightChild && (!swapIdx && rightChild > current) || (swapIdx && rightChild > leftChild)) {
        swapIdx = rightChildIdx;
      }

      if (!swapIdx) break;

      this.swap(swapIdx, currentIdx);
      currentIdx = swapIdx;
    }
  }
};
