import { Component, OnInit } from '@angular/core';
import { NavLink } from './nav-link';
import { NavDataService } from './nav-data.service';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.css'],
	providers: [NavDataService]
})

export class NavComponent implements OnInit {
	title: string = 'Angular 2 Test Application';
	links: Array<NavLink> = [];

	constructor(private navData: NavDataService) { }

	ngOnInit() {
		this.links = this.navData.links;
	}
}
