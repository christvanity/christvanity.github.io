import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {DataView} from 'primeng/dataview';
import {ProductService} from '../../services/product/product.service';
import {Skeleton} from 'primeng/skeleton';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-skeleton-loading-data-grid',
  imports: [
    FormsModule,
    DataView,
    Skeleton,
    NgClass
  ],
  templateUrl: './skeleton-loading-data-grid.component.html',
  styleUrl: './skeleton-loading-data-grid.component.scss'
})
export class SkeletonLoadingDataGridComponent {
  layout: string = 'grid';
  products: any | undefined;
  responsiveOptions: any[] | undefined;
  options: string[] = ['list', 'grid'];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    // this.products = this.productService.getProductsSmall().then((data) => (this.products.set([...data.slice(0,12)])));
    this.products = this.productService.getProductsSmall();
    this.products = this.products.set([...this.products.slice(0,12)]);
  }

  getSeverity(product: any) {
    switch (product.inventoryStatus) {
      case 'INSTOCK':
        return 'success';

      case 'LOWSTOCK':
        return 'warning';

      case 'OUTOFSTOCK':
        return 'danger';

      default:
        return null;
    }
  }

  counterArray(n: number): any[] {
    return Array(n);
  }
}
