import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { QuotesModule } from './quotes/quotes.module';
import { BooksModule } from './books/books.module';

const DECLARATIONS = [
	AppComponent
];

const MODULES = [
	BrowserModule,
	HttpClientModule,
	SharedModule,
	QuotesModule,
	AppRoutingModule,
	BooksModule
];

@NgModule({
	declarations: DECLARATIONS,
	imports: MODULES,
	providers: [],
	bootstrap: [AppComponent]
})

export class AppModule {}
