
var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {size2: 0, storage: {}};
  
  _.extend(instance, stackMethods);
  return instance;
  
};

var stackMethods = {
  
  push : function(value){
    this.storage[this.size2] = value;
    this.size2++;
  },

  pop : function(){
    if(this.size2 > 0){
      this.size2--;
      var temp = this.storage[this.size2];
      delete this.storage[this.size2];
      return temp;
    }
  },

  size : function(){
    return this.size2;
  }

};