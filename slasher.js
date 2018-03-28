
function slasher(arr, howMany) {
    // it doesn't always pay to be first
    var origArrLength = arr.length;

    for (var i = 1; i <= howMany && i <= origArrLength; i++) {
        arr.shift();
    }
    return arr;
}

slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5);