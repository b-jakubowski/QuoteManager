import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookQuotesComponent } from './books-quotes.component';

describe('BookQuotesComponent', () => {
	let component: BookQuotesComponent;
	let fixture: ComponentFixture<BookQuotesComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ BookQuotesComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(BookQuotesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
