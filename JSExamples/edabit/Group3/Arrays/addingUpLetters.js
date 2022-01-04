function addLetters(a) {
	var alpha = '0abcdefghijklmnopqrstuvwxyz';
	var index = 0;
	if (a.length === 0) {
	    return 'z';
	}
	for (var i = 0; i < a.length; i++) {
	    index += alpha.indexOf(a[i]);
	}
	if (index > 26) {
	    while (index > 26) {
	        index -= 26;
	    }
	}
	return alpha[index];
}