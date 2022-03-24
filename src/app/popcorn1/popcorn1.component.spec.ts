import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Popcorn1Component } from './popcorn1.component';

describe('Popcorn1Component', () => {
  let component: Popcorn1Component;
  let fixture: ComponentFixture<Popcorn1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Popcorn1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Popcorn1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
