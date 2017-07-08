var Queue = function() {
  var instance = Object.create(queueMethods);
  instance.head = 0;
  instance.tail = 0;
  instance.storage = {};
  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.tail] = value;
  this.tail++;
};

queueMethods.dequeue = function() {
  if (this.tail > this.head) {
    var temp = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return temp;
  }
};

queueMethods.size = function() {
  return this.tail - this.head;
};