import { Injectable } from '@angular/core';
import { NavLink } from './nav-link';

@Injectable()
export class NavDataService {
	links: Array<NavLink>;
	
	constructor() {
		this.links = [];
		this.links.push({
			text: 'Link 1', 
			url: 'link1'
		});
		this.links.push({
			text: 'Link 2', 
			url: 'link2'
		});
	}

}
