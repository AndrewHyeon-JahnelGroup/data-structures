// Instantiate a new graph
var Graph = function() {
};

Graph.prototype.vertices = [];
Graph.prototype.edges = {};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function( node ) {
  if ( !this.contains( node ) ) { 
    this.vertices.push( node );
  }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function( node ) {
  for ( var i = 0; i !== this.vertices.length; i++ ) {
    if ( this.vertices[ i ] === node ) {
      return true;
    }
  }

  return false;
};

// Removes a node from the graph.
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

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function( fromNode, toNode ) {
  var fromNodeString = JSON.stringify( fromNode );
  var toNodeString = JSON.stringify( toNode );

  if ( this.edges[ fromNodeString ][ toNodeString ] ) {
    return true;
  }

  return false;
};

// Connects two nodes in a graph by adding an edge between them.
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

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function( fromNode, toNode ) {
  var fromNodeString = JSON.stringify( fromNode );
  var toNodeString = JSON.stringify( toNode );

  delete this.edges[ fromNodeString ][ toNodeString ];
  delete this.edges[ toNodeString ][ fromNodeString ];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function( cb ) {
  for ( var i = 0; i !== this.vertices.length; i++ ) {
    cb( this.vertices[ i ] );
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */