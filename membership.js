infoCollector = () => {
	const button = document.getElementById('submit');

	button.addEventListener('click', ()=>{
		const section = document.getElementById('ThanksDialog');

		const information = section.getElementsByTagName('p')[0];
		
		const name = document.getElementById('membername').value;
		const email = document.getElementById('membermail').value;
		const student = document.getElementById('isStudent').checked;
		const worker = document.getElementById('isEmployed').checked;
		const option = document.getElementById('something').value;

		if(name.length > 0 && email.length > 0){
			information.innerHTML += name + " ";
			information.innerHTML += email + " ";
			if(student)
				information.innerHTML += ". You are a student";
			if(worker)
				information.innerHTML += ". You work.";
			section.style = 'display:block';

			document.getElementById('forms').style.opacity = 0.1;
		}
	});

	const closeButton = document.getElementById('close');
	closeButton.addEventListener('click', ()=>{
		const section = document.getElementById('ThanksDialog');
		section.style = 'display: none';
		document.getElementById('forms').style.opacity = 1;
	});
};

let navOverlayHandler = () => {
    document.getElementById('overlay').addEventListener('click', ()=> {
        document.getElementById('navigation').style = 'display : block';
    });
};

window.onload = event =>{
    console.log("FROM MEMEBERSHIP JS");
    infoCollector();
    navOverlayHandler();
};