import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PizzaServiceService {

	// mettre l'url de sa machine
	private url = "http:\/\/pizzatp-manumarti.c9users.io\/pizzas\/";

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
      		this.http.post(this.url,data)
      		.subscribe(res => {
        		resolve(res);
      		})
    	});
  	}

	deletePizza(id: String){
	    return new Promise(resolve =>{
	    	this.http.delete(this.url + id)
	      	.subscribe(res => {
	        	resolve(res);
	      	})
	    });
	 }

  	update(data){
  		console.log("data",data);
    	return new Promise(resolve =>{
      		this.http.put(this.url + data.id, data)
      		.subscribe(res => {
        		resolve(res);
      		})
    	});
  	}

}
