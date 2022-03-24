import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cupcake2Component } from './cupcake2.component';

describe('Cupcake2Component', () => {
  let component: Cupcake2Component;
  let fixture: ComponentFixture<Cupcake2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cupcake2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cupcake2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
