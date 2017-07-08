var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  //O( c )
  list.addToTail = function( value ) {
    var node = Node( value );

    if ( list.tail ) {
      list.tail.next = node;
    }

    if ( !list.head ) {
      list.head = node;
    }

    list.tail = node;

    return node;
  };

  list.addAfter = function ( value, prevNode ) {
    var newNode = Node( value );
    var temp = prevNode.next;

    prevNode.next = newNode;
    newNode.next = temp;
  };

  //O( c )
  list.removeHead = function() {
    if ( list.head ) {
      var temp = list.head;

      list.head = list.head.next;
    
      return temp.value;
    }
  };

  //O( n )
  list.contains = function( target ) {
    var currentNode = list.head;

    while ( currentNode !== null ) {
      if ( currentNode.value === target ) {
        return true;
      }

      currentNode = currentNode.next;
    }

    return false;
  };

  return list;
};

var Node = function( value ) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */