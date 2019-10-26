import { Component, OnDestroy, OnInit } from '@angular/core';
import { BooksQuotesService } from '../../books-quotes.service';
import { booksMock } from '../../../../../assets/mocks/books';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { BookInterface } from '../../../book.interface';

@Component({
	selector: 'app-book-quotes-list',
	templateUrl: './book-quotes-list.component.html',
	styleUrls: ['./book-quotes-list.component.scss']
})
export class BookQuotesListComponent implements OnInit, OnDestroy{
	routeParamsId: string;
	subscription;
	quotes = this.booksQuotesService.fetchMockData(booksMock).pipe(
		map((books: BookInterface[]) => books.filter(book => book.id === this.routeParamsId)[0].quotes)
	);

	constructor(private booksQuotesService: BooksQuotesService, private route: ActivatedRoute) {}

	ngOnInit(): void {
		this.subscription = this.route.params.subscribe(params => this.routeParamsId = params['id']);
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
