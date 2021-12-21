const password = document.querySelector('.password')
const p = document.querySelector('.passwordinfo')
const pinfo = document.querySelector('.inf')
const letters = /[a-z]/i
const numbers = /[0-9]/i
const special = /[!@#$%^&*()-+]/
const minValue = 10

const showMsg = () => {
	if (
		password.value.length > 10 &&
		password.value.match(letters) &&
		password.value.match(numbers) &&
		password.value.match(special)
	) {
		pinfo.textContent = 'strong password 😍'
		pinfo.style.color = 'lime'
	} //check's length of password
	else if (password.value.length == 0) {
		pinfo.textContent = "you didn't enter anything 😐"
		pinfo.style.color = 'white'
	} else {
		pinfo.textContent = 'weak password 🤦'
		pinfo.style.color = 'red'
	}
}

password.addEventListener('keyup', showMsg)
