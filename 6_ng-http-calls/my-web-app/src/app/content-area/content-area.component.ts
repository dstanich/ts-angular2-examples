import { Component } from '@angular/core';

@Component({
	selector: 'app-content-area',
	templateUrl: './content-area.component.html',
	styleUrls: ['./content-area.component.css']
})
export class ContentAreaComponent {
	currentName: string;
	
	constructor() { }

	formChanged(value: string) {
		console.log('formChanged()', value);
		this.currentName = value;
	}

}
