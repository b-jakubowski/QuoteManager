import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-all-quotes-list-item',
	templateUrl: './all-quotes-list-item.component.html',
	styleUrls: ['./all-quotes-list-item.component.scss']
})
export class AllQuotesListItemComponent {
	@Input() quote;
}
