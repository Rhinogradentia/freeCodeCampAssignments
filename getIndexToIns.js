function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    arr = arr.sort(function(a,b){
        return a - b;
    });

    for(var i = 0; i < arr.length; i++)
    {
        if (arr[i] >= num && i < arr.length){
            num = i;
            break;
        } else if (arr[i] < num && i + 1 == arr.length) {
            num = i + 1;
            break;
        } 
    }
    console.log(num);
    return num;
}

getIndexToIns([2, 5, 10], 15);