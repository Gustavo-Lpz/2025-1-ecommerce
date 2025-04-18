import { Routes } from '@angular/router';
import { ProductosComponent } from './pages/productos/productos.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CarritoComponent } from './pages/carrito/carrito.component';



export const routes: Routes = [
    {path:'', component:ProductosComponent, title:"Productos"},
    {path:'checkout', component:CheckoutComponent, title:"Direccion"},
    {path:'carrito', component:CarritoComponent, title:"carrito"},
   

];
