import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../IngredientService/ingredient.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {

  dataIngredient :any;
  DeleteIngredient: any;
  constructor(public ingredientService: IngredientService) { }

  ngOnInit() {
  	this.ingredientService.get().then(data =>{
      		this.dataIngredient = data; 
    });
  }

  onSelectedContact(event){
      console.log(event);
      this.dataIngredient = event.ingredient;
  }

  onDeletedIngredient(event){
    console.log("DeleteIngredient",event);
    this.DeleteIngredient = event;

    let res = this.dataIngredient.find( x => { return x._id == this.DeleteIngredient._id });
    console.log(res);
    this.dataIngredient.splice(this.dataIngredient.indexOf(res),1);
  }

}
