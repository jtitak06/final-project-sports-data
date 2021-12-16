const stats = document.getElementById("stats-nfl");
const passing = document.getElementById("passing");
const rushing = document.getElementById("rushing");
const receiving = document.getElementById("receiving");
const names = document.getElementById("names-nfl");

//retrieve NFL passing leaders on click
passing.addEventListener("click", retrievePassing);

function retrievePassing() {
	fetch("https://nfl-data-demo.herokuapp.com/passing", {
	"method": "GET",
})
.then(response => {
	return response.json();
}).then(data => {
	let player = document.getElementById("name-nfl");
	let dataLeader = document.getElementById("number-nfl");
	names.innerHTML = "";
	stats.innerHTML = "";
	dataLeader.textContent = "Yards";
	player.textContent = "Name";
	for (let value of data [ "Passing Leaders" ]) {
		let name = document.createElement("p");
		let data = document.createElement("p");

		name.textContent = value.name;
		data.textContent = value.yards;
		names.append(name);
		stats.append(data);
	}
    console.log(data);
})
.catch(err => {
	console.error(err);
});

};

rushing.addEventListener("click", retrieveRushing);

function retrieveRushing() {
	fetch("https://nfl-data-demo.herokuapp.com/rushing", {
	"method": "GET",
})
.then(response => {
	return response.json();
}).then(data => {
	let player = document.getElementById("name-nfl");
	let dataLeader = document.getElementById("number-nfl");
	names.innerHTML = "";
	stats.innerHTML = "";
	dataLeader.textContent = "Yards";
	player.textContent = "Name";
	for (let value of data [ "Rushing Leaders" ]) {
		let name = document.createElement("p");
		let data = document.createElement("p");

		name.textContent = value.name;
		data.textContent = value.yards;
		names.append(name);
		stats.append(data);
	}
    console.log(data);
})
.catch(err => {
	console.error(err);
});

};

receiving.addEventListener("click", retrieveReceiving);

function retrieveReceiving() {
	fetch("https://nfl-data-demo.herokuapp.com/receiving", {
	"method": "GET",
})
.then(response => {
	return response.json();
}).then(data => {
	let player = document.getElementById("name-nfl");
	let dataLeader = document.getElementById("number-nfl");
	names.innerHTML = "";
	stats.innerHTML = "";
	dataLeader.textContent = "Yards";
	player.textContent = "Name";	

	for (let value of data [ "Receiving Leaders" ]) {
		let name = document.createElement("p");
		let data = document.createElement("p");

		name.textContent = value.name;
		data.textContent = value.yards;
		names.append(name);
		stats.append(data);
	}
    console.log(data);
})
.catch(err => {
	console.error(err);
});

};

