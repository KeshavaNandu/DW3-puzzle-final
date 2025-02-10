import { async, ComponentFixture, discardPeriodicTasks, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedTestingModule } from '@tmo/shared/testing';

import { BooksFeatureModule } from '../books-feature.module';
import { BookSearchComponent } from './book-search.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

describe('ProductsListComponent', () => {
  let component: BookSearchComponent;
  let fixture: ComponentFixture<BookSearchComponent>;
  let store: MockStore;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BooksFeatureModule, NoopAnimationsModule, SharedTestingModule],
      providers: [
        provideMockStore({
          initialState: {
            books: {
              entities: []
            }
          }
        })
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(MockStore);
    spyOn(component.searchForm, 'valueChanges');
    spyOn(store, 'dispatch');
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('It should call searchBooks() when we have value for search term and actual time spent after entering search term is equal to 500ms', fakeAsync(() => {
    component.searchForm.controls.term.setValue('Angular')
    tick(500);
    component.searchForm.valueChanges.subscribe(() => {
      expect(store.dispatch).toBeCalled();
    })
  }));

  it('It should not call searchBooks() when we have value for search term and actual time spent after entering search term is less than 500ms', fakeAsync(() => {
    component.searchForm.controls.term.setValue('Angular')
    tick(400);
    expect(store.dispatch).not.toBeCalled();
    discardPeriodicTasks();
  }))
});
