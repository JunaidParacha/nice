//Can we make this into a method of an object?
function each(arr, callback) {
  // loop through the array
  for(var i = 0; i < arr.length; i++) {
    callback(arr[i]); // invoking the callback many times... delegation!
  }
}
var _ = {
   map: function(list, callback) {
    var nList = [];
    for(var i = 0; i < list.length; i++) {    
      nList.push(callback(list[i]));          
    }
    return nList;
   },
   reduce: function(list, callback, memo) { 
    var sum = 0;
    if (!memo){
        memo = list[0];
        sum = 1;
      }
      for(var i = sum; i < list.length; i++) {    
        memo = (callback(memo, list[i]));          
      }
    return memo;
   },
   find: function(list, callback) {   
    for(var i = 0; i < list.length; i++) {    
      if(callback(list[i]) == true) {
        return list[i];          
      }
    }
   },
   
   filter: function(list, callback) { 
    var nList = [];
    for(var i = 0; i < list.length; i++) {    
      if(callback(list[i]) == true) {
        nList.push(list[i]);          
      }
    }
   return nList;
   },
   
   reject: function(list, callback) { 
    var nList = [];
    for(var i = 0; i < list.length; i++) {    
      if(callback(list[i]) == false) {
        nList.push(list[i]);          
      }
    }
   return nList;
   }
 }
var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
  console.log(evens); // if things are working right, this will return [2,4,6].
var times3 = _.map([1, 2, 3], function(num){ return num * 3; });
  console.log(times3);
var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
  console.log(sum);
var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
  console.log(even);
var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }); 
  console.log(odds); 
/*  var _ = {
  map: function(array, callback){
    for (var i = 0; i < array.length; i++) {
      array[i] = callback(array[i]);
    }
  },
  reduce: function(array, callback, memo){
      var el = 0;
      if (!memo){
        memo = array[0];
        el = 1;
      }
      for (var i = el; i < array.length; i++) {
        memo = callback(array[i], memo);
      }
      return memo;

  },
  find: function(array, callback){
    for (var i = 0; i < array.length; i++) {
      if (callback(array[i])){
        return array[i];
      }
    }
  },
  filter: function(array, callback){
    var tempArray =[];
    for (var i = 0; i < array.length; i++) {
      if (callback(array[i])){
        tempArray.push(array[i]);
      }
    }
    // we could also modify the original array
    return tempArray;
  },
  reject: function(array, callback){
    var tempArray =[];
    for (var i = 0; i < array.length; i++) {
      if (!callback(array[i])){
        tempArray.push(array[i]);
      }
    }
    // we could also modify the original array
    return tempArray;
  },
}

var array = [3,4,5]
_.map(array, function callback(x){return x * 5;});
console.log(array);
console.log(_.reduce(array, function callback(x, memo){return x + memo;}));
console.log(_.find(array, function callback(x){return x == 15;}));
// note: we used named functions for clarity above, but we can also pass anonymous functions as the second parameter:
_.filter(array, function(x){return x > 20;})
console.log(array);*/