import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cake4Component } from './cake4.component';

describe('Cake4Component', () => {
  let component: Cake4Component;
  let fixture: ComponentFixture<Cake4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cake4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cake4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
