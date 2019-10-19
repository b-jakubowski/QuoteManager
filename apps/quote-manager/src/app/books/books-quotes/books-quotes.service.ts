import { Injectable } from '@angular/core';
import { booksMock } from '../../../assets/mocks/books';
import { Observable, of } from 'rxjs';
import { BookInterface } from '../book.interface';

@Injectable({
	providedIn: 'root'
})
export class BooksQuotesService {

	constructor() { }

	fetchBooksMock(): Observable<BookInterface[]> {
		return of(booksMock);
	}
}
