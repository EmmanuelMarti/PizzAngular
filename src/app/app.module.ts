import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from "clarity-angular";
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { PizzaServiceService } from './PizzaService/pizza-service.service';
import { PizzaListeComponent } from './pizza-liste/pizza-liste.component';
import { HttpClientModule } from '@angular/common/http';
import { OnePizzaComponent } from './one-pizza/one-pizza.component';

const appRoutes: Routes = [
  { path: '', component: PizzaListeComponent },
  { path: 'pizza/:id', component: OnePizzaComponent}  
];

@NgModule({
  declarations: [
    AppComponent,
    PizzaListeComponent,
    OnePizzaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    ClarityModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  providers: [PizzaServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
