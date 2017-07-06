var Queue = function() {
  this.size2 = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value){
  this.storage[this.size2] = value;
  this.size2++;
};

Queue.prototype.dequeue = function() { 
  if(this.size2 > 0) {
    var dequeued = this.storage[0];
    for(var k in this.storage){
      this.storage[k] = this.storage[Number(k) + 1];
    }
    this.size2--;
    return dequeued;
  }
}; 

Queue.prototype.size = function() {
  return this.size2;
};