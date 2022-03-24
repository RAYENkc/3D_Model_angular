import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cake1Component } from './cake1.component';

describe('Cake1Component', () => {
  let component: Cake1Component;
  let fixture: ComponentFixture<Cake1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cake1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cake1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
