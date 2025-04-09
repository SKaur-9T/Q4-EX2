// if statement

// function verifyAge() {
// 	let age = document.getElementById('inputAge').value;
// 	if (age <= 17) {
// 		window.alert("You are not eligible to vote yet.");
// 	}
// 	if (age > 17) {
// 		window.alert("You have been verified.");
// 	}
// }

// if-else statement

function verifyAge() {
	let age = document.getElementById('inputAge').value;
	if (age <= 17) {
		window.alert("You are not eligible to vote yet.");
	}
	else {
		window.alert("You have been verified.");
	}
}

function changetoCapital() {
	var fName = document.getElementById("inputName");
	fName.value = fName.value.toUpperCase();
}
