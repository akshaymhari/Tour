import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carousal1Component } from './carousal1.component';

describe('Carousal1Component', () => {
  let component: Carousal1Component;
  let fixture: ComponentFixture<Carousal1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Carousal1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Carousal1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
