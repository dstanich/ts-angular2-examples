import { Component, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-form-area',
	templateUrl: './form-area.component.html',
	styleUrls: ['./form-area.component.css'],
	outputs: ['formChanged']
})
export class FormAreaComponent {
	formChanged: EventEmitter<string> = new EventEmitter<string>();
	lastValue: string;

	constructor() { }

	nameChanged(nameField: HTMLInputElement) {
		// If the name has changed, trigger the event
		if (nameField.value !== this.lastValue) {
			this.lastValue = nameField.value;
			this.formChanged.next(nameField.value);
		}
	}

	clearClicked() {
		this.lastValue = '';
		this.formChanged.next('');
	}
}
