describe('doublylinkList', function() {
  var doublylinkList;

  beforeEach(function() {
    doublylinkList = doublyLinkedList();
  });

  it('should have a head and tail', function() {
    expect(doublylinkList).to.have.property('head');
    expect(doublylinkList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(doublylinkList.addToTail).to.be.a('function');
    expect(doublylinkList.removeHead).to.be.a('function');
    expect(doublylinkList.contains).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    doublylinkList.addToTail(4);
    expect(doublylinkList.tail.value).to.equal(4);
    doublylinkList.addToTail(5);
    expect(doublylinkList.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    doublylinkList.addToTail(4);
    doublylinkList.addToTail(5);
    expect(doublylinkList.head.value).to.equal(4);
    doublylinkList.removeHead();
    expect(doublylinkList.head.value).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function() {
    doublylinkList.addToTail(4);
    expect(doublylinkList.removeHead()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    doublylinkList.addToTail(4);
    doublylinkList.addToTail(5);
    expect(doublylinkList.contains(4)).to.equal(true);
    expect(doublylinkList.contains(5)).to.equal(true);
    expect(doublylinkList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    doublylinkList.addToTail(4);
    doublylinkList.addToTail(5);
    doublylinkList.removeHead();
    expect(doublylinkList.contains(4)).to.equal(false);
  });

  //ADVANCED

  it('should add a value after a specified node', function() {
    var node4 = doublylinkList.addToTail(4);
    var node5 = doublylinkList.addToTail(5);
    doublylinkList.addAfter(10, node4);
    expect(doublylinkList.contains(10)).to.equal(true);
    expect(node4.next.value).to.equal(10);
    
  });

  it('should designate a new head when new nodes are added', function() {
    doublylinkList.addToHead(4);
    expect(doublylinkList.head.value).to.equal(4);
    doublylinkList.addToHead(5);
    expect(doublylinkList.head.value).to.equal(5);
  });

  it('should remove the tail from the list when removeHead is called', function() {
    doublylinkList.addToHead(4);
    doublylinkList.addToHead(5);
    expect(doublylinkList.tail.value).to.equal(4);
    doublylinkList.removeTail();
    expect(doublylinkList.tail.value).to.equal(5);
  });
});