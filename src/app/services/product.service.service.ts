import { Injectable } from '@angular/core';
import { Product } from '../caractersiticas';
import { data } from '../data';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private productos: Product[] = data;
  private carrito: Product[] = [];

  constructor(private router: Router) {
    this.loadCarritoFromLocalStorage();
  }

  getAllProducts(): Product[] {
    return this.productos;
  }

  getProductByID(id: number): Product | undefined {
    return this.productos.find(p => p._id === id);
  }

  addProduct(product: Product): void {
    const lastId = this.productos.length > 0 ? this.productos[this.productos.length - 1]._id : 0;
    product._id = lastId + 1;
    this.productos.push({ ...product });
  }

  getCarrito(): Product[] {
    return [...this.carrito]; 
  }

  addToCarrito(product: Product): void {
    
    const newId = this.carrito.length > 0 ? Math.max(...this.carrito.map(p => p._id)) + 1 : 1;
    const newProduct = { ...product, _id: newId };
    this.carrito.push(newProduct);
    this.saveCarritoToLocalStorage();
  }

  removeFromCarrito(id: number): void {
    this.carrito = this.carrito.filter(p => p._id !== id);
    this.saveCarritoToLocalStorage();
  }

  clearCarrito(): void {
    this.carrito = [];
    this.saveCarritoToLocalStorage();
  }

  private saveCarritoToLocalStorage(): void {
    try {
      localStorage.setItem('carrito', JSON.stringify(this.carrito));
    } catch (e) {
      console.error('Error al guardar en localStorage', e);
    }
  }

  private loadCarritoFromLocalStorage(): void {
    const data = localStorage.getItem('carrito');
    if (data) {
      try {
        this.carrito = JSON.parse(data);
      } catch (e) {
        console.error('Error al cargar desde localStorage', e);
        this.carrito = [];
      }
    }
  }
}
