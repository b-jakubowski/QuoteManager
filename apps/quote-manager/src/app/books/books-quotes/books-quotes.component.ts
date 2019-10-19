import { Component } from '@angular/core';
import { BooksQuotesService } from './books-quotes.service';

@Component({
	selector: 'app-books-quotes',
	templateUrl: './books-quotes.component.html',
	styleUrls: ['./books-quotes.component.scss']
})
export class BooksQuotesComponent {
	booksMock = this.booksQuoteService.fetchBooksMock();

	constructor(private booksQuoteService: BooksQuotesService) {}
}
