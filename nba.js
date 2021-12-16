const stats = document.getElementById("stats-nba");
const points = document.getElementById("points");
const rebounds = document.getElementById("rebounds");
const assists = document.getElementById("assists-nba");
const names = document.getElementById("names-nba");

// retireve NBA points API on click
points.addEventListener("click", retrievePoints);

function retrievePoints() {
	fetch("https://nba-data-demo.herokuapp.com/points", {
	"method": "GET",
})
.then(response => {
	return response.json();
}).then(data => {
	let player = document.getElementById("name-nba");
	let dataLeader = document.getElementById("number-nba");
	names.innerHTML = "";
	stats.innerHTML = "";
	dataLeader.textContent = "Points";
	player.textContent = "Name";
	for (let value of data [ "Points Leaders" ]) {
		let name = document.createElement("p");
		let data = document.createElement("p");

		name.textContent = value.name;
		data.textContent = value.points;
		names.append(name);
		stats.append(data);
	}
    console.log(data);
})
.catch(err => {
	console.error(err);
});

}

//retrieve NBA rebounds API on click
rebounds.addEventListener("click", retrieveRebounds);

function retrieveRebounds() {
	fetch("https://nba-data-demo.herokuapp.com/rebounds", {
		"method": "GET",
	})
	.then(response => {
		return response.json();
	}).then(data => {
		let player = document.getElementById("name-nba");
		let dataLeader = document.getElementById("number-nba");
		names.innerHTML = "";
		stats.innerHTML = "";
		dataLeader.textContent = "Rebounds";
		player.textContent = "Name";
		for (let value of data [ "Rebounds Leaders" ]) {
			let name = document.createElement("p");
			let data = document.createElement("p");
	
			name.textContent = value.name;
			data.textContent = value.rebounds;
			names.append(name);
			stats.append(data);
		}
		console.log(data);
	})
	.catch(err => {
		console.error(err);
	});
}

//retrieve NBA assists API on click
assists.addEventListener("click", retrieveAssistsNBA);

function retrieveAssistsNBA() {
	fetch("https://nba-data-demo.herokuapp.com/assists", {
		"method": "GET",
	})
	.then(response => {
		return response.json();
	}).then(data => {
		let player = document.getElementById("name-nba");
		let dataLeader = document.getElementById("number-nba");
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
}