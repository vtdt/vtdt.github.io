		var today = new Date();
		var birthDate = new Date("March 17, 2005");
		var age = today.getFullYear() - birthDate.getFullYear();
		var month = today.getMonth() - birthDate.getMonth();
		if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
			age--;
		}
		document.getElementById("year").innerHTML = "Age: " + age;
