import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IngredientService } from '../IngredientService/ingredient.service';
import { Ingredient } from '../Models/Ingredient';

@Component({
  selector: 'app-ingredient-detail',
  templateUrl: './ingredient-detail.component.html',
  styleUrls: ['./ingredient-detail.component.css']
})
export class IngredientDetailComponent implements OnInit {

  ingredient : any;
  constructor( private route: ActivatedRoute, private router: Router, public ingredientService: IngredientService ) { 
  	this.ingredient = new Ingredient();
  }

  ngOnInit() {
  	let id = this.route.snapshot.params['id'];
  	this.ingredientService.getById(id).then((data:Ingredient) =>{
    	//console.log(data);
    	this.ingredient = data[0];
    	console.log(this.ingredient);
    });
  }

}
