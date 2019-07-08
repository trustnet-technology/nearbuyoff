import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherCardsComponent } from './other-cards.component';

describe('OtherCardsComponent', () => {
  let component: OtherCardsComponent;
  let fixture: ComponentFixture<OtherCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
