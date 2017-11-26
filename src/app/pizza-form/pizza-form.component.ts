import { Component, OnInit } from '@angular/core';
import { PizzaServiceService } from '../PizzaService/pizza-service.service';
import { Pizza } from '../Models/Pizza';
import { IngredientService } from '../IngredientService/ingredient.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pizza-form',
  templateUrl: './pizza-form.component.html',
  styleUrls: ['./pizza-form.component.css']
})
export class PizzaFormComponent implements OnInit {

  data: any;
  pizzaForm; any;
  dataIngredient :any;
  msg : any;
  constructor(private route: ActivatedRoute, private router: Router, 
  	public pizzaService: PizzaServiceService, public ingredientService: IngredientService) {
  	this.pizzaForm = new Pizza();
  }


  ngOnInit() {
  	let id = this.route.snapshot.params['id'];
  	console.log(id);
  	//Pour un post
  	if(id == 0){
  		this.ingredientService.get().then(data =>{
      		this.dataIngredient = data;
      		console.log(this.dataIngredient.length);
      		for(let i = 0; i < this.dataIngredient.length; i++){
        		this.dataIngredient[i].check = false;
      		}
      		console.log(this.pizzaForm.ingredients);
    	});
  	}else{
  		//Pour un put 
	  	this.pizzaService.getById(id).then(data =>{
	  		this.pizzaForm = data[0];
	  		console.log(this.pizzaForm);
	  	});
	  	this.getIngredient();
  	}
  }

  logForm(){
    console.log("début");
    let ingredients = [];
    for(let i = 0; i < this.dataIngredient.length; i++){
      if(this.dataIngredient[i].check == true){
          ingredients.push(this.dataIngredient[i]._id);
      }
    }
    console.log(ingredients);
   /* angular.forEach(this.data, function(value,key){
      console.log(value);
    });*/
    this.pizzaForm.ingredients = ingredients;
    console.log(this.pizzaForm);
    if(this.pizzaForm.id == 0){
      console.log("Je passe dans le post");
    	let date = new Date();
    	let year = date.getFullYear();
    	let month = date.getMonth();
    	let day = date.getDate();
    	let dateConcat = day + "/" + month + "/" + year;
    	this.pizzaForm.dateCreated = dateConcat;
    	console.log("POST");
    	this.pizzaService.post(this.pizzaForm).then( data =>{
        this.msg = "Votre pizza a bien été créée";
      });

    }else if(this.pizzaForm._id){
    	let date = new Date();
    	let year = date.getFullYear();
    	let month = date.getMonth();
    	let day = date.getDate();
    	let dateConcat = day + "/" + month + "/" + year;
    	this.pizzaForm.dateUpdate = dateConcat;
    	this.pizzaForm.id = this.pizzaForm._id;
    	console.log("UPDATE");
    	console.log(this.pizzaForm);
    	this.pizzaService.update(this.pizzaForm).then( data=>{
        this.msg = "Votre pizza a bien été modifiée";
      });
    }
    
  }
  getIngredient(){
    this.ingredientService.get().then(data =>{
        console.log(data);
        this.dataIngredient = data;
        for(let i in this.dataIngredient){
          this.dataIngredient[i].check = this.hasIngredient(this.dataIngredient[i]);
        }
    });

  }

  hasIngredient(ingredient){
    let item = this.pizzaForm.ingredients.find(x =>{
      return x._id == ingredient._id;
    });
    return item != null;
  }

}
