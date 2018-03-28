function chunkArrayInGroups(arr, size) {
    // Break it up.
    var newArr = [];
    var counter = arr.length;
  
  for (var i = 0; counter > 0; i+=size) {
        
      var inter = arr.slice(i, i+size);

      newArr.push(inter);

      counter -= size;
    }
    return newArr;
  }
  
//chunkArrayInGroups(["a", "b", "c", "d"], 2);
//chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
//chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);