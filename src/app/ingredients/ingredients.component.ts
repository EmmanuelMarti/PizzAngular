import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../IngredientService/ingredient.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {

  dataIngredient :any;
  constructor(public ingredientService: IngredientService) { }

  ngOnInit() {
  	this.ingredientService.get().then(data =>{
      		this.dataIngredient = data; 
    });
  }

}
