import { Component, Input } from '@angular/core';
import { BookInterface } from '../../book.interface';

@Component({
	selector: 'app-book',
	templateUrl: './book.component.html',
	styleUrls: ['./book.component.scss']
})
export class BookComponent {
	@Input() book: BookInterface;
}
