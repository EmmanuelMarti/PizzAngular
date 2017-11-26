import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from "clarity-angular";
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PizzaServiceService } from './PizzaService/pizza-service.service';
import { IngredientService } from './IngredientService/ingredient.service';
import { PizzaListeComponent } from './pizza-liste/pizza-liste.component';
import { HttpClientModule } from '@angular/common/http';
import { OnePizzaComponent } from './one-pizza/one-pizza.component';
import { PizzaDetailComponent } from './pizza-detail/pizza-detail.component';
import { PizzaFormComponent } from './pizza-form/pizza-form.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { OneIngredientComponent } from './one-ingredient/one-ingredient.component';
import { IngredientDetailComponent } from './ingredient-detail/ingredient-detail.component';
import { IngredientFormComponent } from './ingredient-form/ingredient-form.component';

const appRoutes: Routes = [
  { path: '', component: PizzaListeComponent },
  { path: 'ingredients',          component: IngredientsComponent},
  { path: 'pizza/form/:id',       component: PizzaFormComponent},
  { path: 'ingredient/form/:id',  component: IngredientFormComponent},
  { path: 'pizza/:id',            component: PizzaDetailComponent},
  { path: 'ingredient/:id',       component: IngredientDetailComponent}


];

@NgModule({
  declarations: [
    AppComponent,
    PizzaListeComponent,
    OnePizzaComponent,
    PizzaDetailComponent,
    PizzaFormComponent,
    IngredientsComponent,
    OneIngredientComponent,
    IngredientDetailComponent,
    IngredientFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ClarityModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  providers: [PizzaServiceService, IngredientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
