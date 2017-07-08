// Instantiate a new graph
var Graph = function() {
};

Graph.prototype.vertices = [];
Graph.prototype.edges = {};

// O(n)
Graph.prototype.addNode = function( node ) {
  if ( !this.contains( node ) ) { 
    this.vertices.push( node );
  }
};

// O(n)
Graph.prototype.contains = function( node ) {
  for ( var i = 0; i !== this.vertices.length; i++ ) {
    if ( this.vertices[ i ] === node ) {
      return true;
    }
  }

  return false;
};

// O(n)
Graph.prototype.removeNode = function( node ) {
  var nodeString = JSON.stringify( node );

  for ( var i = 0; i < this.vertices.length; i++ ) {
    if ( this.vertices[ i ] === node ) {
      this.vertices.splice( i, 1 );
    }
  }

  for ( var edge in this.edges[ node ] ) {
    delete this.edges[ edge ][ node ];
  }

  delete this.edges[ node ];
};

// O(1)
Graph.prototype.hasEdge = function( fromNode, toNode ) {
  var fromNodeString = JSON.stringify( fromNode );
  var toNodeString = JSON.stringify( toNode );

  if ( this.edges[ fromNodeString ][ toNodeString ] ) {
    return true;
  }

  return false;
};

// O(1)
Graph.prototype.addEdge = function( fromNode, toNode ) {
  var fromNodeString = JSON.stringify( fromNode );
  var toNodeString = JSON.stringify( toNode );

  if ( !this.edges[ fromNodeString ] ) {
    this.edges[ fromNodeString ] = {};
  }

  if ( !this.edges[ toNodeString ] ) {
    this.edges[ toNodeString ] = {};
  }

  this.edges[ fromNodeString ][ toNodeString ] = true;
  this.edges[ toNodeString ][ fromNodeString ] = true;
};

// O(1)
Graph.prototype.removeEdge = function( fromNode, toNode ) {
  var fromNodeString = JSON.stringify( fromNode );
  var toNodeString = JSON.stringify( toNode );

  delete this.edges[ fromNodeString ][ toNodeString ];
  delete this.edges[ toNodeString ][ fromNodeString ];
};

// O(n)
Graph.prototype.forEachNode = function( cb ) {
  for ( var i = 0; i !== this.vertices.length; i++ ) {
    cb( this.vertices[ i ] );
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */