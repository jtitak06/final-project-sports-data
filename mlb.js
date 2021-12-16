const stats = document.getElementById("stats-mlb");
const homeRuns = document.getElementById("home-run");
const rbis = document.getElementById("rbi");
const wins = document.getElementById("wins-mlb");
const names = document.getElementById("names-mlb");


//Retrieve Home Runs on click
homeRuns.addEventListener("click", retrieveHomeRuns);

function retrieveHomeRuns() {
	fetch("https://mlb-data-demo.herokuapp.com/homeruns", {
	"method": "GET",
})
.then(response => {
	return response.json();
}).then(data => {
	let player = document.getElementById("name-mlb");
	let dataLeader = document.getElementById("number-mlb");
	names.innerHTML = "";
	stats.innerHTML = "";
	dataLeader.textContent = "Home Runs";
	player.textContent = "Name";
	for (let value of data [ "Home Run Leaders" ]) {
		let name = document.createElement("p");
		let data = document.createElement("p");

		name.textContent = value.name;
		data.textContent = value.homeruns;
		names.append(name);
		stats.append(data);
	}
    console.log(data);
})
.catch(err => {
	console.error(err);
});

}

//Retrieve RBIs on click
rbis.addEventListener("click", retrieveRBIs);

function retrieveRBIs() {
	fetch("https://mlb-data-demo.herokuapp.com/RBIs", {
	"method": "GET",
})
.then(response => {
	return response.json();
}).then(data => {
	let player = document.getElementById("name-mlb");
	let dataLeader = document.getElementById("number-mlb");
	names.innerHTML = "";
	stats.innerHTML = "";
	dataLeader.textContent = "RBIs";
	player.textContent = "Name";
	for (let value of data [ "RBIs" ]) {
		let name = document.createElement("p");
		let data = document.createElement("p");

		name.textContent = value.name;
		data.textContent = value.RBIs;
		names.append(name);
		stats.append(data);
	}
    console.log(data);
})
.catch(err => {
	console.error(err);
});

};

//Retrieve Wins on click
wins.addEventListener("click", retrieveWins);

function retrieveWins() {
	fetch("https://mlb-data-demo.herokuapp.com/wins", {
	"method": "GET",
})
.then(response => {
	return response.json();
}).then(data => {
	let player = document.getElementById("name-mlb");
	let dataLeader = document.getElementById("number-mlb");
	names.innerHTML = "";
	stats.innerHTML = "";
	dataLeader.textContent = "Wins";
	player.textContent = "Name";
	for (let value of data [ "Wins" ]) {
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

}