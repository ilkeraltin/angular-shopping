import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../shared/services/category.service';
import { ProductService } from '../../../shared/services/product.service';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  product = {};
  id;
  constructor(
    private router: Router,
    private categoryService: CategoryService,
    private productService: ProductService,
    private route: ActivatedRoute
  ) {
    this.categories$ = categoryService.getAll();

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.productService.get(this.id).take(1).subscribe(p => this.product = p.payload.val());
    }

   }

  ngOnInit() {
  }

  save(product) {
    if (this.id) {
      this.productService.update(this.id, product);
    } else {
      this.productService.create(product);
    }
    this.router.navigate(['/']);
  }

  delete() {
    if (confirm('Are you sure?')) {
      this.productService.delete(this.id);
      this.router.navigate(['/']);
    }
  }

}
