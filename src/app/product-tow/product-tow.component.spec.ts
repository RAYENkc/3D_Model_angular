import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTowComponent } from './product-tow.component';

describe('ProductTowComponent', () => {
  let component: ProductTowComponent;
  let fixture: ComponentFixture<ProductTowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductTowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
