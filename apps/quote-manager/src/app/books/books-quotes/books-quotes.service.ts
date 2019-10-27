import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class BooksQuotesService {

	constructor() { }

	fetchMockData(mockData: [] | {}): Observable<[] | {}> {
		return of(mockData);
	}
}
