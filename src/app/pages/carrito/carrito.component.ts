import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../../services/product.service.service';
import { Product } from '../../caractersiticas';
import { CheckoutComponent } from "../checkout/checkout.component";
import Swal from 'sweetalert2';
import { ConfirmacionComponent } from "../../confirmacion/confirmacion.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [ConfirmacionComponent, CommonModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnInit {

  carrito: Product[]=[];

  constructor(private productService:ProductServiceService){}

  ngOnInit(): void {
    this.carrito = this.productService.getCarrito();
  }
  
  deleteProducto(id: number): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Este producto será eliminado del carrito.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.productService.removeFromCarrito(id);
        this.carrito = this.productService.getCarrito();
  
        Swal.fire(
          'Eliminado',
          'El producto ha sido eliminado del carrito.',
          'success'
        );
      }
    });
  }
  
  mostrarresumen(){
    //this.bandera=true;//
    this.bandera=!this.bandera;
    if (this.bandera) 
    {this.textobtn="Ocultar Pago"}
    else{this.textobtn="Confirmar Pago"
   }
    console.log();
  }

  bandera:boolean=false

  textobtn:string='Confirmar pago'

}
