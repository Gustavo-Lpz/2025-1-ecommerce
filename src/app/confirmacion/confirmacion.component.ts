import { Component, Input } from '@angular/core';
import { Product } from '../caractersiticas';
import { ProductServiceService } from '../services/product.service.service';

@Component({
  selector: 'app-confirmacion',
  imports: [],
  templateUrl: './confirmacion.component.html',
  styleUrl: './confirmacion.component.css'
})



export class ConfirmacionComponent {
  
  @Input() productos: Product[] = [];

  ngOnInit(){
    console.log(this.productos)
  }

 






}
