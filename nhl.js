const stats = document.getElementById("stats-nhl");
const goals = document.getElementById("goals");
const assists = document.getElementById("assists-nhl");
const wins = document.getElementById("wins-nhl");
const names = document.getElementById("names-nhl");

//Display Goals Leaders on click
goals.addEventListener("click", retrieveGoals);

function retrieveGoals() {
	fetch("https://nhl-data-demo.herokuapp.com/goals", {
	"method": "GET",
})
.then(response => {
	return response.json();
}).then(data => {
	let player = document.getElementById("name-nhl");
	let dataLeader = document.getElementById("number-nhl");
	names.innerHTML = "";
	stats.innerHTML = "";
	dataLeader.textContent = "Goals";
	player.textContent = "Name";

	for (let value of data [ "Goals Leaders" ]) {
		let name = document.createElement("p");
		let data = document.createElement("p");

		name.textContent = value.name;
		data.textContent = value.goals;
		names.append(name);
		stats.append(data);
	}
    console.log(data);
})
.catch(err => {
	console.error(err);
});

};

//Display Assists Leaders on click
assists.addEventListener("click", retrieveAssists);

function retrieveAssists() {
	fetch("https://nhl-data-demo.herokuapp.com/assists", {
	"method": "GET",
})
.then(response => {
	return response.json();
}).then(data => {
	let player = document.getElementById("name-nhl");
	let dataLeader = document.getElementById("number-nhl");
	names.innerHTML = "";
	stats.innerHTML = "";
	dataLeader.textContent = "Assists";
	player.textContent = "Name";
	for (let value of data [ "Assists Leaders" ]) {
		let name = document.createElement("p");
		let data = document.createElement("p");

		name.textContent = value.name;
		data.textContent = value.assists;
		names.append(name);
		stats.append(data);
	}
    console.log(data);
})
.catch(err => {
	console.error(err);
});

};

//Display Goals Leaders on click
wins.addEventListener("click", retrieveWins);

function retrieveWins() {
	fetch("https://nhl-data-demo.herokuapp.com/wins", {
	"method": "GET",
})
.then(response => {
	return response.json();
}).then(data => {
	let player = document.getElementById("name-nhl");
	let dataLeader = document.getElementById("number-nhl");
	names.innerHTML = "";
	stats.innerHTML = "";
	dataLeader.textContent = "Wins";
	player.textContent = "Name";
	for (let value of data [ "Wins Leaders" ]) {
		let name = document.createElement("p");
		let data = document.createElement("p");

		name.textContent = value.name;
		data.textContent = value.wins;
		names.append(name);
		stats.append(data);
	}
    console.log(data);
})
.catch(err => {
	console.error(err);
});

};