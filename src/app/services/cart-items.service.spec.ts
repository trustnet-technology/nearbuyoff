import { TestBed } from '@angular/core/testing';

import { CartItemsService } from './cart-items.service';

describe('CartItemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CartItemsService = TestBed.get(CartItemsService);
    expect(service).toBeTruthy();
  });
});
