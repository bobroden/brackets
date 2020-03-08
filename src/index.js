module.exports = function check(str, bracketsConfig) {
    var brackets = [];
  for(var i = 0; i < bracketsConfig.length; i++) {
  	brackets.push(bracketsConfig[i].join(""));
  }
  var arr = str.split("");
  for(var i = 0; i < arr.length; i++) {
  	for(var j = 0; j < brackets.length; j++) {
  		if((arr[i] + arr[i+1]) === brackets[j]) {
  			arr.splice(i, 2);
  			i = -1;
  			j = -1;
  			continue;
  		}
  	}
  }
  if(arr.length === 0)
  	return true;
  return false;
}
