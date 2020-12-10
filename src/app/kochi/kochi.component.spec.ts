import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KochiComponent } from './kochi.component';

describe('KochiComponent', () => {
  let component: KochiComponent;
  let fixture: ComponentFixture<KochiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KochiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KochiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
