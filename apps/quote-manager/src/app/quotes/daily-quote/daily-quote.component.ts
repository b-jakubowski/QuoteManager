import { Component } from '@angular/core';
import { QuotesService } from '../quotes.service';
import { filter, map } from 'rxjs/operators';

@Component({
	selector: 'app-daily-quote',
	templateUrl: './daily-quote.component.html',
	styleUrls: ['./daily-quote.component.scss']
})
export class DailyQuoteComponent {
	randomQuoteAuthor = this.quotesService.fetchDailyQuote().pipe(
		filter(Boolean),
		map(quote => quote.author)
	);
	randomQuoteContent = this.quotesService.fetchDailyQuote().pipe(
		filter(Boolean),
		map(quote => quote.content)
	);
	randomQuote = this.quotesService.fetchDailyQuote().pipe(
		filter(Boolean)
	);

	constructor(private quotesService: QuotesService) {}
}
