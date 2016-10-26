import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { InventoryService } from './inventory.service';
import { InventoryObject } from './inventory-object';

@Component({
	selector: 'app-inventory-results',
	templateUrl: './inventory-results.component.html',
	styleUrls: ['./inventory-results.component.css'],
	providers: [InventoryService],
	inputs: ['user']
})
export class InventoryResultsComponent implements OnChanges {
	inventory: Array<InventoryObject>;
	
	constructor(private invService: InventoryService) {
		this.inventory = [];
	}

	ngOnChanges(changes) {
		console.log('Changes:', changes);
		this.invService.getInventoryForUser(changes.user.currentValue)
			.subscribe(objects => {
				console.log('New objects', objects);
				this.inventory = objects as Array<InventoryObject>;
			});
	}
}
