interface TeamData {
	location: string;
	name: string;
	foundedIn: number;
}

class NFLTeam {
	fullName: string;
	
	constructor(public data: TeamData) {
		this.fullName = data.location + ' ' + data.name;
	}

	getDisplayString(): string {
		return this.data.foundedIn + ' ' + this.fullName;
	}
}

// Handler for the button's click event
function clickHandler(): void {
	let teams: Array<any> = [
		// Location, Name, Founded in
		['Green Bay', 'Packers', 1919],
		['Minnesota', 'Vikings', 1961],
		['Detroit', 'Lions', 1929],
		['Chicago', 'Bears', 1919]
	];
	
	// Create an instance of NFLTeam for each team and add to screen
	teams.forEach(teamData => {
		let teamObj = new NFLTeam({
			location: teamData[0],
			name: teamData[1],
			foundedIn: teamData[2]
		});
		let teamDiv = document.createElement('div');
		teamDiv.innerHTML = teamObj.getDisplayString();
		document.querySelector('.team-list-container').appendChild(teamDiv);
	});
}

// Hookup click handler for the button
document.querySelector('#populateButton').addEventListener('click', clickHandler);
