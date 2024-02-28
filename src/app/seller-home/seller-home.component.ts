import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../dataType';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {
  productList:undefined | product[];
  productMessage:undefined | string;
  deleteIcon = faTrash;
  editIcon = faEdit;

  constructor(private product:ProductService){
    
  }

  ngOnInit():void{
   this.list();
  }

  deleteProduct(id:number){
    this.product.deleteProduct(id).subscribe((result)=>{
      if(result){
        this.productMessage = "Product is deleted"
      }
    })
    setTimeout(() => {
      this.productMessage = undefined;
    }, 3000);
    this.list();
  }

  list(){
    this.product.productList().subscribe((result)=>{
      console.warn(result);
      this.productList = result;
    })
  }
}
