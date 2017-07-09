var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray( this._limit );
  this._count = 0;
};

//avg: O(1) worst: O(n)
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

  if ( this._count >= 3 * this._limit / 4 ) {
    this.rehash();
  }
};

//avg: O(1) worst: O(n)
HashTable.prototype.retrieve = function( k ) {
  var index = getIndexBelowMaxForKey( k, this._limit );
  var bucket = this._storage.get( index );
  for ( var i = 0; i < bucket.length; i++ ) {
    if ( bucket[ i ][ 0 ] === k ) {
      return bucket[ i ][ 1 ];
    }
  }

};

//avg: O(1) worst: O(n)
HashTable.prototype.remove = function( k ) {
  var index = getIndexBelowMaxForKey( k, this._limit );
  var bucket = this._storage.get( index );
  
  for (var i = 0; i < bucket.length; i++ ) {
    if (bucket[ i ][ 0 ] === k ) {
      bucket.splice( i, 1 );
      this._count--;

      if ( this._count === this._limit / 4 && this._limit > 8 ) {
        this.rehash();
      }
    }
  }
};

HashTable.prototype.rehash = function() {
  var tempStorage = [];

  for ( var index = 0; index !== this._limit; index++ ) { 
    var bucket = this._storage.get( index );
 
    if ( bucket ) {
      for ( var i = 0; i !== bucket.length; i++ ) {
        tempStorage.push( bucket[ i ] );
      }
    }
  }

  if ( this._count === 3 * this._limit / 4 ) {
    this._limit = 2 * this._limit;

    this._storage = LimitedArray( this._limit );
  }

  if ( this._count === this._limit / 4 && this._limit > 8 ) {
    this._limit = this._limit / 2;

    this._storage = LimitedArray( this._limit );
  }

  this._count = 0;

  for ( var i = 0; i !== tempStorage.length; i++ ) {
    this.insert( tempStorage[ i ][ 0 ], tempStorage[ i ][ 1 ] );
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */