import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksQuotesComponent } from './books-quotes.component';

describe('BooksQuotesComponent', () => {
	let component: BooksQuotesComponent;
	let fixture: ComponentFixture<BooksQuotesComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [BooksQuotesComponent]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(BooksQuotesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
