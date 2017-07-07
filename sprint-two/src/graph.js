// Instantiate a new graph
var Graph = function() {
  this.edges = [];
};

Graph.prototype.vertices = [];

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function( node ) {
  this.vertices.push( node );
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
  for ( var i = 0; i !== this.vertices.length; i++ ) {
    if ( this.vertices[ i ] === node ) {
      //this.vertices.splice( i, 1 );
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function( fromNode, toNode ) {
  /*for ( var i = 0; i !== fromNode.edges.length; i++ ) {
    if ( JSON.stringify( fromNode.edges[ i ] ) === JSON.stringify( toNode ) ) {
      return true;
    }
  }

  return false;*/
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function( fromNode, toNode ) {
  /*fromNode.edges.push( toNode );
  toNode.edges.push( fromNode );*/
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function( fromNode, toNode ) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function( cb ) {
  /*for ( var i = 0; i !== this.vertices.length; i++ ) {
    cb( this.vertices[ i ] );
  }*/
};

/*
 * Complexity: What is the time complexity of the above functions?
 */