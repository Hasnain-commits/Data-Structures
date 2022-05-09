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
    
    enqueue(val, priority) {
        const newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    
    bubbleUp() {
        let currentIdx = this.values.length - 1;
        const current = this.values[currentIdx];
        
        while (currentIdx > 0) {
            let parentIdx = Math.floor((currentIdx - 1) / 2);
            const parent = this.values[parentIdx];
            if (parent.priority <= current.priority) break;
            this.values[currentIdx] = parent;
            this.values[parentIdx] = current;
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
        
        return min.val;
    }
    
    trickleDown() {
        let currentIdx = 0;
        const current = this.values[0];
        const length = this.values.length;
        
        while (true) {
            let leftChildIdx = 2 * currentIdx + 1;
            let rightChildIdx = 2 * currentIdx + 2;
            let leftChild, rightChild;
            let swap = null;
            
            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild.priority < current.priority) swap = leftChildIdx; 
            } 
            
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if ((swap === null && rightChild.priority < current.priority) || (swap !== null && rightChild.priority < leftChild.priority)) swap = rightChildIdx;
            }
                            if (swap === null) break;
                
                this.values[currentIdx] = this.values[swap];
                this.values[swap] = current;
                currentIdx = swap;
        }
    }
}
