import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PizzaServiceService } from '../PizzaService/pizza-service.service';

@Component({
  selector: 'app-one-pizza',
  templateUrl: './one-pizza.component.html',
  styleUrls: ['./one-pizza.component.css']
})
export class OnePizzaComponent implements OnInit {

  data: any;
  @Input() pizza;
  @Output() onSelected = new EventEmitter<boolean>();
  @Output() onDeleted = new EventEmitter<boolean>();
  constructor(public pizzaService:PizzaServiceService) { }

  ngOnInit() {
  }

  getOnePersonne(pizza){
  		this.data = {
  			pizza,
  			status: true
  		};
  		this.onSelected.emit(this.data);
  }

  DeletePizza(){
    console.log(this.pizza);
    this.onDeleted.emit(this.pizza);
    this.pizzaService.deletePizza(this.pizza._id);
    
  }
}
