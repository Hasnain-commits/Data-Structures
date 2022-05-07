class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(val) {
        this.values.push(val);
        this.bubbleUp();
    }

    bubbleUp() {
        let currentIdx = this.values.length - 1;
        let current = this.values[currentIdx];

        while (currentIdx > 0) {
            let parentIdx = Math.floor((currentIdx - 1) / 2);
            let parent = this.values[parentIdx];
            if (parent >= current) break;
            this.values[currentIdx] = parent;
            this.values[parentIdx] = current;
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
        let idx = 0;
        let current = this.values[0];
        const length = this.values.length;

        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let swap = null;
            let rightChild, leftChild;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx]; 
                if (current < leftChild) swap = leftChildIdx;
            }

            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if ((swap !== null && leftChild < rightChild) || (swap === null && rightChild > current)) {
                    swap = rightChildIdx;
                }
            }

            if (swap === null) break;

            this.values[idx] = this.values[swap];
            this.values[swap] = current;
            idx = swap; 
        }
    }
}
