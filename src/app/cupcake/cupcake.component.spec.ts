import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CupcakeComponent } from './cupcake.component';

describe('CupcakeComponent', () => {
  let component: CupcakeComponent;
  let fixture: ComponentFixture<CupcakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CupcakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CupcakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
