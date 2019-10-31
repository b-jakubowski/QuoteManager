import { Component } from '@angular/core';
import { BooksQuotesService } from '../../books/books-quotes/books-quotes.service';
import { booksMock } from '../../../assets/mocks/books';
import { concatAll, map, toArray } from 'rxjs/operators';
import { BookInterface } from '../../books/book.interface';

@Component({
	selector: 'app-all-quotes-list',
	templateUrl: './all-quotes-list.component.html',
	styleUrls: ['./all-quotes-list.component.scss']
})
export class AllQuotesListComponent {
	allQuotes = this.booksQuotesService.fetchMockData(booksMock).pipe(
		map((books: BookInterface[]) => books.map((book: BookInterface) => book.quotes.map((quote) => {
			return { ...quote, bookAuthor: book.author, bookName: book.name };
		}))),
		concatAll(),
		concatAll(),
		toArray()
	);

	constructor(private booksQuotesService: BooksQuotesService) {}
}
