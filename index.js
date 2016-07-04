(() => {

  'use strict';

  module.exports = RandomPassword;

function RandomPassword(Min, Max)
{
	var password = new String('');
	var addConsonant = new Boolean(true);
	var doubleConsonants = new String('cdfglmnprst');
	var singleConsonants = new String('bcdfghjklmnprstv');
	var letter = new String('');
	var vowels = new String('aeiou');
	var length = new Number(0);
	var index = new Number(0);

	length = Math.round(Math.random() * (Max - Min)) + Min;

	while (password.length < length)
	{
		random = Math.round(Math.random() * 100);

		// 10% Double Consonants
		if(password != '' && addConsonant && random < 10)
		{
			index = Math.round(Math.random() * (doubleConsonants.length - 1));
			letter = doubleConsonants.substring(index, index+1);
			password += letter + letter;
			addConsonant = false;
		}
		else
		{
			// 80% Consonants
			if(password != '' && addConsonant && random < 90)
			{
				index = Math.round(Math.random() * (singleConsonants.length - 1));
				letter = singleConsonants.substring(index, index+1);
				password += letter;
				addConsonant = false;
			}
			// 10% vowels
			else
			{
				index = Math.round(Math.random() * (vowels.length - 1))
				letter = vowels.substring(index, index+1);
				password += letter;
				addConsonant = true;
			}
		}
	}
	if(password.length > Max)
		password = password.substring(0, Max)
	return(password)
}

})();
