import { TestBed } from '@angular/core/testing';

import { MainCarouselItemsService } from './main-carousel-items.service';

describe('MainCarouselItemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MainCarouselItemsService = TestBed.get(MainCarouselItemsService);
    expect(service).toBeTruthy();
  });
});
