const generateTable = () =>{
	console.log('in generateTable function');

	const table_body = document.getElementById("events").querySelector('tbody');
	
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

	table_body.appendChild(fragment);

	console.log(table_body);


};

window.onload = generateTable;