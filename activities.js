const generateTable = () =>{
	const table = document.getElementById('activityTable');

	let fragment = document.createDocumentFragment();
	
	events.forEach(item => {
		let tr_ele = document.createElement('tr');

		let name = document.createElement('td');
		name.textContent = item.name;

		let dates = document.createElement('td');
		dates.textContent = item.dates;

		tr_ele.appendChild(name);
		tr_ele.appendChild(dates);
		fragment.appendChild(tr_ele);
	})

	table.appendChild(fragment);

	console.log(table);
};

let navOverlayHandler = () => {
    document.getElementById('overlay').addEventListener('click', ()=> {
        document.getElementById('navigation').style = 'display : block';
    });
};

window.onload = event => {
	console.log('YOOOOOOOO');
	generateTable();
	navOverlayHandler();

}