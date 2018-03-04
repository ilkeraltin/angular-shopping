import { ProductCardComponent } from './components/product-card/product-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProductCardComponent
  ],
  exports: [
    ProductCardComponent
  ]
})
export class SharedModule { }
