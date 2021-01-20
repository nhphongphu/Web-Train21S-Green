import { Component, OnInit } from '@angular/core';
import { Cart } from '../../model/cart.model';
import { CartService } from '../../Service/cart.service';

@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.scss']
})
export class CartCardComponent implements OnInit {

  constructor() { }
  
  public cart:Cart

  ngOnInit(): void {
  }

}
