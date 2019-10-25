import { Component } from '@angular/core';
import { BooksQuotesService } from './books-quotes.service';
import { booksMock } from '../../../assets/mocks/books';

@Component({
	selector: 'app-books-quotes',
	templateUrl: './books-quotes.component.html',
	styleUrls: ['./books-quotes.component.scss']
})
export class BooksQuotesComponent {
	booksMock = this.booksQuoteService.fetchMockData(booksMock);

	constructor(private booksQuoteService: BooksQuotesService) {}
}
