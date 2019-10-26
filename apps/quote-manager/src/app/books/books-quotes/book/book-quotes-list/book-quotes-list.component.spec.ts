import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookQuotesListComponent } from './book-quotes-list.component';

describe('QuotesListComponent', () => {
	let component: BookQuotesListComponent;
	let fixture: ComponentFixture<BookQuotesListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ BookQuotesListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(BookQuotesListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
