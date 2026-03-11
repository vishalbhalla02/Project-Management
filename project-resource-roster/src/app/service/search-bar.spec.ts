import { TestBed } from '@angular/core/testing';

import { SearchBar } from './search-bar';

describe('SearchBar', () => {
  let service: SearchBar;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchBar);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
