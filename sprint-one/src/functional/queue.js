var Queue = function() {
  var someInstance = {};
  var storage = {};
  var head = 0;
  var tail = 0;

  someInstance.enqueue = function( value ) {
    storage[ tail ] = value;

    tail++;
  };

  someInstance.dequeue = function() {
    if ( tail > head ) {
      var dequeued = storage[ head ];
      delete storage[ head ];

      head++;

      return dequeued;
    }
  };

  someInstance.size = function() {
    return tail - head;
  };

  return someInstance;
};
