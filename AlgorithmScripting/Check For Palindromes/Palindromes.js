
function palindrome(str) {
  str = str.toLowerCase();
  
  for(var i=0; i < str.length; i++) {
    str=str.replace(' ', '');
    str=str.replace(/[\W_]+/g, '');
  }
  
  var copy = str.split('').reverse().join('');
  
  if (copy==str) {
  return true;
  }
  else {
    return false;
  }
}


palindrome("eye");

// output = true