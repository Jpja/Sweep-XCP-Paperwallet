function fixedlength(string, length, rightAdj) {
	if (typeof(rightAdj)==='undefined') rightAdj = false;
	do {
		if (rightAdj == true) {
			string = "\xA0" + string;
		} else {
			string = string + "\xA0";
		}
	} while (string.length < length); 
	return string;
}