import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookQuotesListItemComponent } from './book-quotes-list-item.component';

describe('BookQuotesListItemComponent', () => {
  let component: BookQuotesListItemComponent;
  let fixture: ComponentFixture<BookQuotesListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookQuotesListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookQuotesListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
