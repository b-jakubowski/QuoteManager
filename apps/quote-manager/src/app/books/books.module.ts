import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { BooksRoutingModule } from './books-routing.module';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksQuotesComponent } from './books-quotes/books-quotes.component';
import { BookComponent } from './books-quotes/book/book.component';
import { BookQuotesListComponent } from './books-quotes/book/book-quotes-list/book-quotes-list.component';
import { BookQuotesListItemComponent } from './books-quotes/book/book-quotes-list/book-quotes-list-item/book-quotes-list-item.component';

const DECLARATIONS = [
	BooksComponent,
	BookComponent,
	BooksListComponent,
	BooksQuotesComponent,
	BookQuotesListComponent,
	BookQuotesListItemComponent
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
