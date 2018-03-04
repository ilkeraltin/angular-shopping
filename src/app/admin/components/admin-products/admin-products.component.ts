import { ProductService } from '../../../shared/services/product.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Product } from '../../../shared/models/product';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  products: Product[];
  filteredProducts: any[];
  subscription: Subscription;

  rows = [];
  columns = [
    { prop: 'title' },
    { prop: 'price' }
  ];
  constructor(private productService: ProductService) {
   this.subscription = this.productService.getAll()
   .subscribe(product => {
     this.filteredProducts = this.products = product;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  ngOnInit() {

  }

  filter(query: string) {
    this.filteredProducts = (query) ?
    this.products.filter(p =>  p.value.title.toLowerCase().includes(query.toLowerCase()))
    : this.products;
  }

}
