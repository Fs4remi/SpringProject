const getUserInfo = () => {
    const button = document.getElementById('log in button');
	button.addEventListener('click', () => {
		console.log('Email: '+ useremail.value + ' password:' + userpassword.value);
    });
};

window.onload = event => {
    console.log("FROM LOG IN JS");
    getUserInfo(); 
}
