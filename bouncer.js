
function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    var arrNew = arr.filter(Boolean);
    //console.log(arrNew);
    return arrNew;
}

//bouncer([1, null, NaN, 2, undefined]);


function destroyer(arr) {
    // Remove all the values
    var toFilter = arguments[0];
    for (var i = 1; i <= arguments.length; i++) {
        toFilter = toFilter.filter(val => val !==arguments[i]);
    }
    
    console.log(toFilter);
    return toFilter;
}

destroyer(["tree", "hamburger", 53], "tree", 53);