// StringCalculator.js
function StringCalculator() {}
StringCalculator.prototype.add = function(string_numbers) {
	
	const zeilen = string_numbers.split("\n");

	if(zeilen.length===1)
	{
		return [zeilen[0].indexOf("X"), 0];
	}
	if (zeilen[0].includes("X"))
	{
		return [zeilen[0].indexOf("X"), 1];
	}

	return [zeilen[1].indexOf("X"), 0];
};
