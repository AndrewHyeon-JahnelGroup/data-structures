var Queue = function() {
  var instance = Object.create(queueMethods);
  instance.size2 = 0;
  instance.storage = {};
  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.size2] = value;
  this.size2++;
};

queueMethods.dequeue = function() {
  if(this.size2>0){
    var temp = this.storage[0];
    for(var i in this.storage){
      this.storage[i] = this.storage[Number(i) + 1];
    }
    this.size2--;
    return temp;
  }
};

queueMethods.size = function() {
  return this.size2;
};