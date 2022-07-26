const buttonAuth = document.querySelector('.button-auth')
const modalAuth = document.querySelector('.modal-auth')
const closeAuth = document.querySelector('.close-auth')
const logInForm = document.querySelector('#logInForm')
const inlogin = document.querySelector('#login')
const inPassword = document.querySelector('#password')
const buttonOut = document.querySelector('.button-out')
const userName = document.querySelector('.user-name')


const login = (user)=>{
	
	buttonAuth.style.display = 'none';
	buttonOut.style.display = 'flex';
	userName.style.display = 'flex';
	userName.textContent = user.login;
	modalAuth.style.display = 'none'
}

const logout = ()=>{
	buttonOut.style.display = 'none';
	buttonAuth.style.display = 'flex';
	userName.style.display = 'none';
	userName.textContent = '';
	localStorage.removeItem('user')
}

buttonOut.addEventListener('click', ()=>{
	logout();
	
})

buttonAuth.addEventListener('click', ()=>{
	modalAuth.style.display = 'flex'
})

closeAuth.addEventListener('click', ()=>{
	modalAuth.style.display = 'none'
})

logInForm.addEventListener('submit', (event)=>{
	event.preventDefault();
	
	if(inlogin.value !== ''){
		const user ={
		login: inlogin.value,
		password: inPassword.value
	    }
	
	    localStorage.setItem('user', JSON.stringify(user))
	    login(user)
	}
	else{
		alert("Введите логин")
	}
	
	
})


if(localStorage.getItem('user')){
	login(JSON.parse(localStorage.getItem('user')));
}
