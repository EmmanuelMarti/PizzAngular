import { Component, OnInit } from '@angular/core';
import { PizzaServiceService } from '../PizzaService/pizza-service.service';
import 'clarity-icons';

@Component({
  selector: 'app-pizza-liste',
  templateUrl: './pizza-liste.component.html',
  styleUrls: ['./pizza-liste.component.css']
})
export class PizzaListeComponent implements OnInit {

  pizzaListe:any;
  pizza :any;
  status:any;
  pizzaDelete:any;
  //private socket = io("https:\/\/pizzatp-manumarti.c9users.io");

  constructor( public pizzaService : PizzaServiceService) {

   }

  ngOnInit() {
  	this.pizzaService.get().then(data =>{
    	console.log(data);
    	this.pizzaListe = data;
    });
  }

  onSelectedContact(event){
  		console.log(event);
  		this.pizza = event.pizza;
  		this.status = event.status;
  }

  onDeletedPizza(event){
    console.log("pizzaDelete",event);
    this.pizzaDelete = event;

    let res = this.pizzaListe.find( x => { return x._id == this.pizzaDelete._id });
    console.log(res);
    this.pizzaListe.splice(this.pizzaListe.indexOf(res),1);
  }

}
