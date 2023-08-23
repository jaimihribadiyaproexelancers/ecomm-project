import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartBtComponent } from './cart-bt.component';

describe('CartBtComponent', () => {
  let component: CartBtComponent;
  let fixture: ComponentFixture<CartBtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartBtComponent]
    });
    fixture = TestBed.createComponent(CartBtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
