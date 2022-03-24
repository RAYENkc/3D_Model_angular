import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cupcake1Component } from './cupcake1.component';

describe('Cupcake1Component', () => {
  let component: Cupcake1Component;
  let fixture: ComponentFixture<Cupcake1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cupcake1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cupcake1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
