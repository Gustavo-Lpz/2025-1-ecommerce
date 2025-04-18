import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product } from '../../caractersiticas';
import { ProductServiceService } from '../../services/product.service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  @Input() productEditing!: Product;
  @Output() submitProducto = new EventEmitter<Product>();

  private productService = inject(ProductServiceService);
  private fb = inject(FormBuilder);

  product = this.fb.group({
    _id: [0],
    name: ['', [Validators.required]],
    address: ['', [Validators.required]],
    quantity: [0, [Validators.min(1)]], 
    image: [''],
    description: ['', [Validators.required]], // Consola (PlayStation, Xbox, Switch)
    paymentMethod: ['', [Validators.required]],
    destinatario: ['', [Validators.required]],
    price:[0]
  });

  fnOnSubmit(event: Event) {
    event.preventDefault();

    if (this.product.valid) {
      const nuevoProducto = this.product.value as Product;

      this.productService.addToCarrito(nuevoProducto);

      Swal.fire({
        title: '¡Agregado!',
        text: `${nuevoProducto.name} se añadió correctamente al carrito.`,
        icon: 'success',
        confirmButtonText: 'OK'
      });

      this.product.reset();
    } else {
      Swal.fire('Formulario inválido', 'Completa todos los campos antes de enviar.', 'warning');
    }
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.product.patchValue({
          image: reader.result as string
        });
      };

      reader.readAsDataURL(file);
    }
  }
}
