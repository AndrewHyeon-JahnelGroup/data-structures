var Stack = function() {
  var instance = Object.create( stackMethods );
  
  instance.size2 = 0;
  instance.storage = {};

  return instance;
};

var stackMethods = {
  push : function( value ) {
    this.storage[ this.size2 ] = value;

    this.size2++;
  },

  pop : function() {
    if ( this.size2 > 0 ) {
      this.size2--;

      var temp = this.storage[ this.size2 ];

      delete this.storage[ this.size2 ];

      return temp;
    }
  },

  size : function() {
    return this.size2;
  }
};