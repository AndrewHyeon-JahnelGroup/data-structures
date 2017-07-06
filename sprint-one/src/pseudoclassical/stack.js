var Stack = function() {
  this.size2 = 0;
  this.storage = {};
};

Stack.prototype.push = function( value ) {
  this.storage[ this.size2 ] = value;

  this.size2++;
};

Stack.prototype.pop = function() {
  if ( this.size2 > 0 ) {
    this.size2--;

    var temp = this.storage[ this.size2 ];
    delete this.storage[ this.size2 ];

    return temp;
  }
};

Stack.prototype.size = function() {
  return this.size2;
};