import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelCityModalComponent } from './sel-city-modal.component';

describe('SelCityModalComponent', () => {
  let component: SelCityModalComponent;
  let fixture: ComponentFixture<SelCityModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelCityModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelCityModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
