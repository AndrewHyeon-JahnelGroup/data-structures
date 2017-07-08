var BinarySearchTree = function( value ) {
  var node = Object.create( BinarySearchTree.prototype );

  node.value = value;
  node.left = undefined;
  node.right = undefined;

  return node;  
};

BinarySearchTree.prototype.root = undefined;

//O(log(n))
BinarySearchTree.prototype.insert = function( value, parent ) {
  if ( !this.root ) {
    this.root = this;
  }

  var currentNode = parent ? parent : this.root;

  if ( value < currentNode.value ) {
    if ( currentNode.left ) {
      this.insert( value, currentNode.left );
    } else { 
      currentNode.left = BinarySearchTree( value );
      return currentNode.left;
    } 
  }

  if ( value > currentNode.value ) {
    if ( currentNode.right ) {
      this.insert( value, currentNode.right );
    } else { 
      currentNode.right = BinarySearchTree( value );
      return currentNode.right;
    }
  }

  //This works too...
  /*var current = this.root;

  while ( current ) {
    if ( value < current.value ) {
      if ( !current.left ) {
        current.left = BinarySearchTree( value );

        return current.left;
      }
      
      current = current.left;
    }

    if ( value > current.value ) {
      if ( !current.right ) {
        current.right = BinarySearchTree( value );

        return current.right;
      }
      current = current.right;
    }

    if ( value === current.value ) {
      return;
    }
  }*/
};

//O(log(n))
BinarySearchTree.prototype.contains = function( value ) {
  var current = this.root;

  while ( current ) {
    if ( value === current.value ) {
      return true;
    } else if ( value < current.value ) {
      current = current.left; 
    } else {
      current = current.right;
    }
  }

  return false;   
};

// O(n)
BinarySearchTree.prototype.depthFirstLog = function( callBack, parent ) {
  var currentNode = parent ? parent : this.root;
  
  if ( currentNode ) {
    callBack( currentNode.value );
  }

  if ( currentNode.left ) {
    this.depthFirstLog( callBack, currentNode.left );
  }

  if ( currentNode.right ) {
    this.depthFirstLog( callBack, currentNode.right );
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */