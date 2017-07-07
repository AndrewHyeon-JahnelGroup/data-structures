var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray( this._limit );
};

HashTable.prototype.insert = function( k, v ) {
  var index = getIndexBelowMaxForKey( k, this._limit );

  if ( this._storage.get( index ) === undefined || this._storage[ index ] === k ) {
    this._storage.set( index, v );
  } else {
    for ( index; index !== this._limit; index++ ) {
      if ( this._storage.get( index ) === undefined ) {
        this._storage.set( index, v );
      }
    }
  }

  this._storage[ index ] = k;
  console.log( this._storage[ index ] );
};

HashTable.prototype.retrieve = function( k ) {
  var index = getIndexBelowMaxForKey( k, this._limit );
  
  if ( this._storage[ index ] === k ) { 
    return this._storage.get( index );
  }

 
  for ( index; index !== this._limit; index++ ) {
    if ( this._storage[ index ] === k ) {
      return this._storage.get( index );
    }
  }
};

HashTable.prototype.remove = function( k ) {
  var index = getIndexBelowMaxForKey( k, this._limit );

  this._storage.set( index, undefined );
};

/*
 * Complexity: What is the time complexity of the above functions?
 */