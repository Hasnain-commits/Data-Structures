class MaxHeap {
    constructor() {
        this.values = [];
    }
    
    addMax(value) {
        this.values.push(value);
        this.bubbleUp();
    }
    
    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element[1] <= parent[1]) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        } 
    }
    
    extractMax() {
        let max = this.values[0];
        let min = this.values.pop();
        
       if (this.values.length > 0) {
            this.values[0] = min;
            this.trickleDown();
        }
        
        return max[0];
    }
    
    trickleDown() {
  let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild,rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild[1] > element[1]) {
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild[1] > element[1]) || 
                    (swap !== null && rightChild[1] > leftChild[1])
                ) {
                   swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}
