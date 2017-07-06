var Queue = function() {
  var instance = { size2: 0, storage: {} };

  _.extend( instance, queueMethods );
  
  return instance;
};

var queueMethods = {};  

queueMethods.enqueue = function( value ) {
  this.storage[ this.size2 ] = value;

  this.size2++;
};

queueMethods.dequeue = function() {
  if ( this.size2 > 0 ) {
    var dequeued = this.storage[ 0 ];

    for ( var key in this.storage ) {
      this.storage[ key ] = this.storage[ Number( key ) + 1 ];
    }

    this.size2--;

    return dequeued;
  }
};

queueMethods.size = function() {
  return this.size2;
};