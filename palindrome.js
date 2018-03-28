
function palindrome(str) {
    // Good luck!
    var change = str;
    change = change.replace(/\W+/g,"").replace(/\s+/g,"").replace(/_+/g,"").replace(/\.+/g,"").toLowerCase();

    var arr = change.split('');
    arrPalindr = arr.reverse();
    var palindr = arrPalindr.join('');

    if (change === palindr){
        return true;
    } else {
        return false;
    }
  }
  

  
  palindrome("_eye");
  palindrome("1 eye for of 1 eye.");
