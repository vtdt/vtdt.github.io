		// get current date
		var today = new Date();

		// get birth date
		var birthDate = new Date("March 17, 2005");

		// calculate age
		var age = today.getFullYear() - birthDate.getFullYear();

		// adjust age if birthday hasn't passed yet this year
		var month = today.getMonth() - birthDate.getMonth();
		if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
			age--;
		}

		// display age
		document.getElementById("year").innerHTML = "Age: " + age;