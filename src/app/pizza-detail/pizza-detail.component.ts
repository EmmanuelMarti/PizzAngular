import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PizzaServiceService } from '../PizzaService/pizza-service.service';
import { Pizza } from '../Models/Pizza';

@Component({
  selector: 'app-pizza-detail',
  templateUrl: './pizza-detail.component.html',
  styleUrls: ['./pizza-detail.component.css']
})
export class PizzaDetailComponent implements OnInit {

  pizza : any;
  constructor(private route: ActivatedRoute, private router: Router, public pizzaService: PizzaServiceService) { 
  	this.pizza = new Pizza();
  }

  ngOnInit() {
  	let id = this.route.snapshot.params['id'];
  	this.pizzaService.getById(id).then((data:Pizza) =>{
    	//console.log(data);
    	this.pizza = data[0];
    	console.log(this.pizza);
    });
  }

}
