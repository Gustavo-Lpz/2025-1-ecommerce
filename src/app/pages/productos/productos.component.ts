import { Component } from '@angular/core';
import { Product } from '../../caractersiticas';
import { ProductServiceService } from '../../services/product.service.service';
import { CardsComponent } from "../cards/cards.component";

@Component({
  selector: 'app-productos',
  imports: [CardsComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

  products:Product[]=[];

  constructor(private productServices:ProductServiceService){}

  ngOnInit():void{
    this.fnGetData();
  }

  fnGetData(){
    this.products=this.productServices.getAllProducts();
  }

}
