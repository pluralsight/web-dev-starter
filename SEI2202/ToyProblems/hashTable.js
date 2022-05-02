
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;

  result.insert = function(k, v) {
    // TODO: implement `insert`
    //calculate an index
    //retreive a bucket at that location
    //iterate over the bucket
      //perform an action if the key is found
    //otherwise perform a not-found action

    var ind = getIndexBelowMaxForKey(k, storageLimit);

    var bucket = storage.get(ind) || [];

    for (let i = 0; i < bucket.length; i++){
      var tuple = bucket[i];
      if(tuple[0] === k) {
        return 'Key already exists, keys must be unique';
        // var oldValue = tuple[1]
        // tuple[1] = v;
        // return oldValue;
      }
      storage.push([ind, v])
    }

  };

  result.retrieve = function(k) {
    // TODO: implement `retrieve`
    //calculate an index
    //retreive a bucket at that location
    //iterate over the bucket
      //perform an action if the key is found
    //otherwise perform a not-found action

    var index = getIndexBelowMaxForKey(k, storageLimit);

  var bucket = storage.get(index) || [];

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      return tuple[1];
    }
  }
  return undefined;
  };

  result.remove = function( ) {
    // TODO: implement `remove`
    //calculate an index
    //retreive a bucket at that location
    //iterate over the bucket
      //perform an action if the key is found
    //otherwise perform a not-found action

    var index = getIndexBelowMaxForKey(k, storageLimit);

  var bucket = storageLimit.get(index) || [];

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      bucket.splice(i, 1);
      size--;
      if (size < storageLimit * 0.25) {
        //this.resize(Math.floor(this._limit / 2));

      }
      return tuple[1];
    }
  }

  return undefined;


  };


}
