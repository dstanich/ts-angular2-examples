import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ContentAreaComponent } from './content-area/content-area.component';
import { FormAreaComponent } from './form-area/form-area.component';
import { ResponseAreaComponent } from './response-area/response-area.component';
import { InventoryResultsComponent } from './inventory-results/inventory-results.component';

@NgModule({
	declarations: [
		AppComponent,
		NavComponent,
		ContentAreaComponent,
		FormAreaComponent,
		ResponseAreaComponent,
		InventoryResultsComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
