// Define class
class NFLTeam {
	fullName: string;
	
	constructor(public location: string, public name: string, public foundedIn: number) {
		this.fullName = location + ' ' + name;
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
		let teamObj = new NFLTeam(teamData[0], teamData[1], teamData[2]);
		let teamDiv = document.createElement('div');
		teamDiv.innerHTML = teamObj.foundedIn + ' ' + teamObj.fullName;
		document.querySelector('.team-list-container').appendChild(teamDiv);
	});
}

// Hookup click handler for the button
document.querySelector('#populateButton').addEventListener('click', clickHandler);
