import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnePizzaComponent } from './one-pizza.component';

describe('OnePizzaComponent', () => {
  let component: OnePizzaComponent;
  let fixture: ComponentFixture<OnePizzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnePizzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnePizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
