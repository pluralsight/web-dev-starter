function combinations(items) {
	var args = [].slice.call(arguments);
	for(let i = 0; i < args.length; i++){
		if(args[i] === 0){
			args.splice(i,1)
		}	
	}	
	let sum = args.reduce(function (previousValue, currentValue) {
  return previousValue * currentValue
}, 1)
	return sum
}

//other solutions
function combinations(items) {
	let args = Array.prototype.slice.call(arguments);
	return args.filter(x => x > 0).reduce((a, b) => a * b, 1);
}