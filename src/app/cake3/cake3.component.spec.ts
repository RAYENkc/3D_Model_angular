import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cake3Component } from './cake3.component';

describe('Cake3Component', () => {
  let component: Cake3Component;
  let fixture: ComponentFixture<Cake3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cake3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cake3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
