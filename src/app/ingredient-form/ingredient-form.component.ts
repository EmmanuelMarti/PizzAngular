import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../IngredientService/ingredient.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Ingredient } from '../Models/Ingredient';

@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.css']
})
export class IngredientFormComponent implements OnInit {

  dataIngredient :any;
  constructor( private route: ActivatedRoute, private router: Router, 
   public ingredientService: IngredientService ) { 
  	this.dataIngredient = new Ingredient();
  }

  ngOnInit() {
  	let id = this.route.snapshot.params['id'];
  	//Pour un put
  	if(id != 0 && id.length != 0){
  		this.ingredientService.getById(id).then( data =>{
  			this.dataIngredient = data[0];
  			console.log("data", this.dataIngredient);
  		});
  	}
  }

  FormIngredient(){
    console.log("début");
    console.log(this.dataIngredient.id);
    if(this.dataIngredient.id == 0){
      console.log("Je passe dans le post");
    	console.log("POST");
    	this.ingredientService.post(this.dataIngredient);

    }else if(this.dataIngredient._id){
    	this.dataIngredient.id = this.dataIngredient._id;
    	console.log("UPDATE");
    	console.log(this.dataIngredient);
    	this.ingredientService.update(this.dataIngredient);
    }
    
  }
}
