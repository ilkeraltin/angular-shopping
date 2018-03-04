import { CategoryService } from './../../services/category.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent  {
  @Input('category') category;
  categories$;
  constructor(categoryService: CategoryService) {
    this.categories$ = categoryService.getAll();
  }
}
