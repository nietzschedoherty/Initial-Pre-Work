// This lesson showed how the parseInt function can be used with another input for Radix to convert a binary number to an integer.
function convertToInteger(str) {
 var a = parseInt(str,2);
 return a;
}

convertToInteger("10011");
