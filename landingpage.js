const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");


const signIn = () => {
	const password = document.getElementById("password");
	const email = document.getElementById("email");

	if (password.value.length < 5 && email.value.includes("@")) {
		alert("Your Password Needs to Be At Least Five Characters and your email must contain an @ symbol")
	}
	else {
		alert(`Thanks For Signing In ${email.value}`)
	}
}

signInBtn.addEventListener("click", () => {
	container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
	container.classList.add("right-panel-active");
});

fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());