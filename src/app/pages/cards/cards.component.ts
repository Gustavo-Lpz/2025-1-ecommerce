import { Component, Input } from '@angular/core';
import { Product } from '../../caractersiticas';

@Component({
  selector: 'app-cards',
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {

  @Input() product!:Product; //el padre sera productos//


}


//comentario//