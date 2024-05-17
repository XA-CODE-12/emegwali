const container = document.querySelector('container');
const registerBtn = document.getElementById('register');

const loginBtn = document.querySelector('login');

registerBtn.addEventListener('click', () =>{
    container.classList.add('active');
});

loginBtnBtn.addEventListener('click', () =>{
    container.classList.remove('active');
});

