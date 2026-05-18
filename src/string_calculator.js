// StringCalculator.js
function StringCalculator() {}
StringCalculator.prototype.add = function(string_numbers) {
	
	if (!string_numbers.includes("X")) 
	{
		return "Spaceship lost forever.";
	}
	const zeilen = string_numbers.split("\n");
	const x= zeilen[0].indexOf("X");

	if(zeilen.length===1)
	{
		return [x, 0];
	}
	if (zeilen[0].includes("X"))
	{
		return [x, 1];
	}

	return [zeilen[1].indexOf("X"), 0];
};
