interface TeamData {
	location: string;
	name: string;
	foundedIn: number;
}

class SportsTeam {
	fullName: string;
	league: string;

	constructor(public data: TeamData) {
		this.fullName = data.location + ' ' + data.name;
	}

	getDisplayString(): string {
		return this.data.foundedIn + ' ' + this.league + ' ' + this.fullName;
	}
}

class NFLTeam extends SportsTeam{
	constructor(public data: TeamData) {
		super(data);
		this.league = 'NFL';
	}
}

class MLBTeam extends SportsTeam{
	constructor(public data: TeamData) {
		super(data);
		this.league = 'MLB';
	}
}

class NHLTeam extends SportsTeam{
	constructor(public data: TeamData) {
		super(data);
		this.league = 'NHL';
	}
}

// Helper to insert an object into the DOM
function insertTeamObjIntoDOM(object: SportsTeam) {
	let teamDiv = document.createElement('div');
	teamDiv.innerHTML = object.getDisplayString();
	document.querySelector('.team-list-container').appendChild(teamDiv);
}

// Handler for the button's click event
function clickHandler(): void {
	let teamObj: SportsTeam;
	teamObj = new NFLTeam({location: 'Minnesota', name: 'Vikings', foundedIn: 1961});
	insertTeamObjIntoDOM(teamObj);
	teamObj = new MLBTeam({location: 'Minnesota', name: 'Twins', foundedIn: 1901});
	insertTeamObjIntoDOM(teamObj);
	teamObj = new NHLTeam({location: 'Minnesota', name: 'Wild', foundedIn: 1997});
	insertTeamObjIntoDOM(teamObj);
}

// Hookup click handler for the button
document.querySelector('#populateButton').addEventListener('click', clickHandler);
