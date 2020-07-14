import { TestBed } from '@angular/core/testing';

import { ProductDashService } from './product-dash.service';

describe('ProductDashService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductDashService = TestBed.get(ProductDashService);
    expect(service).toBeTruthy();
  });
});
