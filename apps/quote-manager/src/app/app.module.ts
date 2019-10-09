import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { QuotesModule } from './quotes/quotes.module';
import { AppRoutingModule } from './app-routing.module';

const DECLARATIONS = [
	AppComponent
];

const MODULES = [
	BrowserModule,
	HttpClientModule,
	SharedModule,
	QuotesModule,
	AppRoutingModule
];

@NgModule({
	declarations: DECLARATIONS,
	imports: MODULES,
	providers: [],
	bootstrap: [AppComponent]
})

export class AppModule {}
