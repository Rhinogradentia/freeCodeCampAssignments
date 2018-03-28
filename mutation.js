function mutation(arr) {
    var result = true;
    var firstStr = arr[0].toLowerCase();
    var secondStr = arr[1].toLowerCase();

    for (var i = 0; i< secondStr.length;i++) {
        if (firstStr.indexOf(secondStr.charAt(i)) < 0)
        {
            result = false;
            break;
        }
    }

    console.log("result is: " + result);
    return result;
}

mutation(["voodoo", "no"]);