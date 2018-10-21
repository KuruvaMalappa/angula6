import { TestBed } from '@angular/core/testing';

import { CategoriesTreeService } from './categories-tree.service';

describe('CategoriesTreeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoriesTreeService = TestBed.get(CategoriesTreeService);
    expect(service).toBeTruthy();
  });
});
