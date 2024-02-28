import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../dataType';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private htttp:HttpClient) { }

  addProduct(data:product){
    return this.htttp.post("http://localhost:3000/products", data)
    
  }

  productList(){
    return this.htttp.get<product[]>("http://localhost:3000/products")
  }

  deleteProduct(id:number){
    return this.htttp.delete<product>(`http://localhost:3000/products/${id}`)
  }

}
