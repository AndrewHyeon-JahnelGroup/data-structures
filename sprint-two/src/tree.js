var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.removeChild = function(value) {
  for ( var i = 0; i < this.children.length; i++ ) {
    if ( this.children[ i ].value === value ) {
      this.children.splice( i, 1 );
    }
  }
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  for (var child = 0; child !== this.children.length; child++) {
    if (this.children[child].contains(target)) {
      return true;
    }  
  }
  return false;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */