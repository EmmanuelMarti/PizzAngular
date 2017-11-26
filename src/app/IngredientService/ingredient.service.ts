import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class IngredientService {

  private url = "http:\/\/pizzatp-manumarti.c9users.io\/ingredient\/";
  constructor(public http: HttpClient) { }

  get(){
    return new Promise(resolve =>{
      this.http.get(this.url)
      .subscribe(data =>{
        resolve(data);
      })
    });
  }

  getById(id: string){
    return new Promise(resolve =>{
      this.http.get(this.url + id)
      .subscribe(data => {
        resolve(data);
      })
    });
  }


  post(data){
    return new Promise(resolve =>{
      this.http.post(this.url + "save",data)
      .subscribe(res => {
        resolve(res);
      })
    });
  }

  deleteIngredient(id: String){
     return new Promise(resolve =>{
      this.http.delete(this.url +"delete/" + id)
      .subscribe(res => {
        resolve(res);
      })
    });
  }

  update(data){
    return new Promise(resolve =>{
      this.http.put(this.url + "edit/" + data.id, data)
      .subscribe(res => {
        resolve(res);
      })
    });
  }
}
