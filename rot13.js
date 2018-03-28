
function rot13(str) { // LBH QVQ VG!
    var decodedString = "";
    for (var i = 0; i < str.length; i++)
    {
        if (/\w/g.test(str.charAt(i))) {
            var encoded = str.charCodeAt(i);
            if (encoded < 78) {  // middle of the capital letter alphabet
                encoded = encoded + 13;
            } else {
                encoded = encoded - 13;    
            }
            var decoded = String.fromCharCode(encoded);
            decodedString += decoded;
        } else {
            decodedString += str.charAt(i); // do not decode non-alphabetic characters
        }
        
    }
    console.log(decodedString);
    return decodedString;
}

// Change the inputs below to test
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");