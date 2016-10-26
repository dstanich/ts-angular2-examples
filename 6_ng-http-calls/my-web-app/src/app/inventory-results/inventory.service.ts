import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { InventoryObject } from './inventory-object';

@Injectable()
export class InventoryService {
	
	constructor(private http: Http) { }

	getInventoryForUser(name: string): Observable<InventoryObject[]> {
		return this.http.get('./test-inv.json')
			.map((response: Response) => {
				console.log('Response from server:', response);
				return response.json()[name];
			})
			.catch((error: any) => {
				console.log('Inventory http call failed', error);
				return Observable.throw(error);
			});
	}
}
