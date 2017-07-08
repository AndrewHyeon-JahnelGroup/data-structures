var Queue = function() {
  this.head = 0;
  this.tail = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.tail] = value;
  this.tail++;
};

Queue.prototype.dequeue = function() { 
  if (this.head < this.tail ) {
    var dequeued = this.storage[this.head];
    this.head++;
    return dequeued;
  }
}; 

Queue.prototype.size = function() {
  return this.tail - this.head;
};