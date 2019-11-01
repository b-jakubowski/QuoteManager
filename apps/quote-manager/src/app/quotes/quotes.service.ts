import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class QuotesService {
	randomQuoteEndpoint = 'https://api.quotable.io/random';

	constructor(private http: HttpClient) { }

	fetchDailyQuote() {
		return this.http.get(this.randomQuoteEndpoint);
	}
}
