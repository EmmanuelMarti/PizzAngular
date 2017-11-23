import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaListeComponent } from './pizza-liste.component';

describe('PizzaListeComponent', () => {
  let component: PizzaListeComponent;
  let fixture: ComponentFixture<PizzaListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
