var Queue = function() {
  var instance = { head: 0, tail: 0, storage: {} };

  _.extend( instance, queueMethods );
  
  return instance;
};

var queueMethods = {};  

queueMethods.enqueue = function( value ) {
  this.storage[ this.tail ] = value;

  this.tail++;
};

queueMethods.dequeue = function() {
  if ( this.tail > this.head ) {
    var dequeued = this.storage[ this.head ];
    delete this.storage[ this.head ];

    this.head++;

    return dequeued;
  }
};

queueMethods.size = function() {
  return this.tail - this.head;
};