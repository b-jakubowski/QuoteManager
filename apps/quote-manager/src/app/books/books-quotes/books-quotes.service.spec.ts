import { TestBed } from '@angular/core/testing';

import { BooksQuotesService } from './books-quotes.service';

describe('BooksQuotesService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: BooksQuotesService = TestBed.get(BooksQuotesService);
		expect(service).toBeTruthy();
	});
});
