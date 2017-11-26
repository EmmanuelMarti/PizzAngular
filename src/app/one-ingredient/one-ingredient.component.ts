import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IngredientService } from '../IngredientService/ingredient.service';

@Component({
  selector: 'app-one-ingredient',
  templateUrl: './one-ingredient.component.html',
  styleUrls: ['./one-ingredient.component.css']
})
export class OneIngredientComponent implements OnInit {

  data: any;
  @Input() ingredient;
  @Output() onSelected = new EventEmitter<boolean>();
  @Output() onDeleted = new EventEmitter<boolean>();
  constructor( public ingredientService: IngredientService ) { }

  ngOnInit() {
  }

  getOnePersonne(ingredient){
  	this.data = {
  		ingredient,
  		status: true
  	};
  	this.onSelected.emit(this.data);
  }

    DeleteIngredient(){
    console.log(this.ingredient);
    this.onDeleted.emit(this.ingredient);
    this.ingredientService.deleteIngredient(this.ingredient._id);
    
  }


}
