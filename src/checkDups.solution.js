function hasDuplicates(myStr) {
  var chars = myStr.split("");
  var seen = {};
  console.log(chars);
  for (var i = 0; i < chars.length; i++) {
    console.log(chars[i]);
    if (seen[chars[i]]) {
      return true;
    }
    seen[chars[i]] = true;
  }
  return false;
}

export { hasDuplicates };
