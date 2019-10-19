import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { BooksRoutingModule } from './books-routing.module';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksQuotesComponent } from './books-quotes/books-quotes.component';
import { BookComponent } from './books-quotes/book/book.component';

const DECLARATIONS = [
	BooksComponent,
	BookComponent,
	BooksListComponent,
	BooksQuotesComponent
];

const MODULES = [
	CommonModule,
	BooksRoutingModule
];

@NgModule({
	declarations: DECLARATIONS,
	imports: MODULES,
	providers: [],
	exports: [...DECLARATIONS, ...MODULES]
})

export class BooksModule { }
