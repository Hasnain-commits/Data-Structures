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
    const current = this.values[currentIdx];

    while (currentIdx > 0) {
      let parentIdx = Math.floor((currentIdx - 1) / 2);
      const parent = this.values[parentIdx];
      if (parent >= current) break;
      this.swap(parentIdx, currentIdx);
      currentIdx = parentIdx;
    }
  }

  extractMax() {
    const max = this.values[0];
    const min = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = min;
      this.trickleDown();
    }

    return max;
  }

  trickleDown() {
    let currentIdx = 0;
    const current = this.values[currentIdx];
    const length = this.values.length;

    while (true) {
      const leftChildIdx = 2 * currentIdx + 1;
      const rightChildIdx = 2 * currentIdx + 2;
      const leftChild = leftChildIdx > length ? null : this.values[leftChildIdx];
      const rightChild = rightChildIdx > length ? null : this.values[rightChildIdx];
      let swapIdx = null;

      if (leftChild && leftChild > current) swapIdx = leftChildIdx;
      if (rightChild && ((!swapIdx && rightChild > current) || (swapIdx && rightChild > leftChild))) swapIdx = rightChildIdx;
      

      if (!swapIdx) break;

      this.swap(swapIdx, currentIdx);
      currentIdx = swapIdx;
    }
  }
};
