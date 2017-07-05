var Queue = function() {
  var someInstance = {};
  var storage = {};
  var size = 0;

  someInstance.enqueue = function( value ) {
    storage[ size ] = value;

    size++;
  };

  someInstance.dequeue = function() {
    if ( size > 0 ) {
      var dequeued = storage[ 0 ];

      for ( var key in storage ) {
        storage[ key ] = storage[ Number( key ) + 1 ];
      }

      size--;

      return dequeued;
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
