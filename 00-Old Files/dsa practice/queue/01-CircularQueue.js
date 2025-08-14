export class MyCircularQueue {
  constructor(k){
    this.queue = new Array(k);
    this.cap = k;
    this.size = 0;
    this.front = 0;
    this.rear = -1;
  }
  enQueue(val){
    if (this.isEmpty()) return false;
    this.rear = (this.rear + 1) % this.cap;
    this.queue[this.rear] = val;
    this.size++
    return true;
  }
  deQueue(){
    if (this.isEmpty()) return false;
    this.fron = (this.front + 1) % this.cap;
    this.size--;
    return true;
  }
  peek(){
    if (this.isEmpty()) return -1;
    return this.queue[this.front];
  }
  back(){
    if (this.isEmpty()) return -1;
    return this.queue[this.rear];
  }
  isEmpty(){
    return this.size === 0;
  }
  isFull(){
    return this.cap === this.size;
  }
}