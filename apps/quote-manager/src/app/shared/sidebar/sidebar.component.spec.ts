import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show aside sidebar', () => {
    expect(fixture.nativeElement.querySelector('[data-test="aside"]')).toBeTruthy();
  });

  it('should show sidebar Add quote button', () => {
    expect(fixture.nativeElement.querySelector('[data-test="add-quote-btn"]')).toBeTruthy();
  });

  it('should show sidebar Daily quote button', () => {
    expect(fixture.nativeElement.querySelector('[data-test="daily-quote-btn"]')).toBeTruthy();
  });

  it('should show sidebar Book quotes button', () => {
    expect(fixture.nativeElement.querySelector('[data-test="book-quotes-btn"]')).toBeTruthy();
  });

  it('should show sidebar All quotes button', () => {
    expect(fixture.nativeElement.querySelector('[data-test="all-quotes-btn"]')).toBeTruthy();
  });

  it('should show sidebar Books list button', () => {
    expect(fixture.nativeElement.querySelector('[data-test="books-list-btn"]')).toBeTruthy();
  });
});
