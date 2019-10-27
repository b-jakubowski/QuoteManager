import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
	selector: 'book-quotes-list-item',
	templateUrl: './book-quotes-list-item.component.html',
	styleUrls: ['./book-quotes-list-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookQuotesListItemComponent {
	@Input() quote;
}
