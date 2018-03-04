import { ShoppingCartService } from '../../../shared/services/shopping-cart.service';
import { Product } from '../../../shared/models/product';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../../shared/services/product.service';
import 'rxjs/add/operator/switchMap';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

  products: Product[] = [];
  filteredProducts: Product[];
  category;
  cart: any;
  subscription: Subscription;

  constructor(
    route: ActivatedRoute,
    productService: ProductService,
    private shoppingCartService: ShoppingCartService
  ) {
    productService.getAll()
    .switchMap(product => {
      this.products = product;
      return route.queryParamMap;
    })
    .subscribe(params => {
        this.category = params.get('category');
        this.filteredProducts = (this.category) ?
        this.products.filter(item => item.value.category === this.category) : this.products;
     });
  }

  async ngOnInit() {
    this.subscription = (await this.shoppingCartService.getCart()).valueChanges()
    .subscribe(c => this.cart = c);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
