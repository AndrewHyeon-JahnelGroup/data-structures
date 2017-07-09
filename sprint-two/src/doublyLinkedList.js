var doublyLinkedList = function() {
  var list = {};

  list.head = null;
  list.tail = null;

  //O( c )
  list.addToTail = function( value ) {
    var newNode = Node( value );
    
    if ( !list.head ) {
      list.head = newNode;
    }

    if ( list.tail ) {
      list.tail.next = newNode;
      newNode.prev = list.tail;
    }

    list.tail = newNode;

    return newNode;
  };

  //O( c )
  list.addAfter = function ( value, prevNode ) {
    var newNode = Node( value );
    var nextNode = prevNode.next;

    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = nextNode;
    nextNode.prev = newNode;
  };

  //O( c )
  list.removeHead = function() {
    if ( list.head ) {
      var oldHead = list.head;

      list.head = list.head.next;

      if ( list.head ) {
        list.head.prev = null;
      }
    
      return oldHead.value;
    }
  };

  //O( n )
  list.contains = function( target ) {
    var currentNode = list.head;

    while ( currentNode ) {
      if ( currentNode.value === target ) {
        return true;
      }

      currentNode = currentNode.next;
    }

    return false;
  };

  //ADVANCED CONTENT

  //O( c )
  list.addToHead = function( value ) {
    var newNode = Node( value );
    
    if ( !list.tail ) {
      list.tail = newNode;
    }

    if ( list.head ) {
      list.head.prev = newNode;
      newNode.next = list.head;
    }

    list.head = newNode;

    return newNode;
  };

  //O( c )
  list.removeTail = function() {
    if ( list.tail ) {
      var oldTail = list.tail;
      list.tail = list.tail.prev;

      if ( list.tail ) {
        list.tail.next = null;
      }

      return oldTail.value;
    }
  };

  return list;
};
  


var Node = function( value ) {
  var node = {};

  node.value = value;
  node.prev = null;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */