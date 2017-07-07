var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray( this._limit );
  this._count = 0;
};

HashTable.prototype.insert = function( k, v ) {
  var index = getIndexBelowMaxForKey( k, this._limit );
  var bucket = this._storage.get( index );
    
  if ( !bucket ) {
    this._storage.set( index, [ [ k, v ] ] );
  } else {    
    for ( var i = 0; i < bucket.length; i++ ) {
      if ( bucket[ i ][ 0 ] === k) {
        bucket[ i ][ 1 ] = v;
      } else { 
        bucket.push( [ k, v ] );
      }
    } 
    
    this._storage.set( index, bucket );
  }

  this._count++;
};

HashTable.prototype.retrieve = function( k ) {
  var index = getIndexBelowMaxForKey( k, this._limit );
  var bucket = this._storage.get( index );
  for ( var i = 0; i < bucket.length; i++ ) {
    if ( bucket[ i ][ 0 ] === k ) {
      return bucket[ i ][ 1 ];
    }
  }

};

HashTable.prototype.remove = function( k ) {
  var index = getIndexBelowMaxForKey( k, this._limit );
  var bucket = this._storage.get( index );
  
  for(var i= 0; i < bucket.length; i++ ) {
    if(bucket[ i ][ 0 ] === k ){
      bucket.splice( i, 1 );
      this._count--;
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */