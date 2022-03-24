import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cupcake3Component } from './cupcake3.component';

describe('Cupcake3Component', () => {
  let component: Cupcake3Component;
  let fixture: ComponentFixture<Cupcake3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cupcake3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cupcake3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
