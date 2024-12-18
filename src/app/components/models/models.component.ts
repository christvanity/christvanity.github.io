import {Component, OnInit} from '@angular/core';
import {DataViewModule} from 'primeng/dataview';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ProductService} from '../../services/product/product.service';
import {Tag} from 'primeng/tag';
import {ButtonModule} from 'primeng/button';
import {Card} from 'primeng/card';
import {Dialog} from 'primeng/dialog';
import {InputText} from 'primeng/inputtext';
import {Avatar} from 'primeng/avatar';

@Component({
  selector: 'app-models',
  imports: [
    DataViewModule,
    Tag,
    ButtonModule,
    CommonModule,
    FormsModule,
    Card,
    Dialog,
    InputText,
    Avatar
  ],
  templateUrl: './models.component.html',
  styleUrl: './models.component.scss'
})
export class ModelsComponent implements OnInit {

  layout: any = 'grid';
  options: string[] = ['list', 'grid'];
  products: any | undefined;
  responsiveOptions: any[] | undefined;
  showVideoCallDialog: boolean = false;
  selectedModel: any = {};
  dialogHeading: string = 'Video Call';

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.products = this.productService.getProductsSmall();

    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 4,
        numScroll: 1
      },
      {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
      }
    ]
  }

  makeVideoCall(product: any) {
    this.selectedModel = product;
    this.dialogHeading = 'Video Call';
    this.showVideoCallDialog = true;
  }

  liveChat(product: any) {
    this.selectedModel = product;
    this.dialogHeading = 'Live Chat';
    this.showVideoCallDialog = true;
  }

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warn';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return 'info';
    }
  }


  counterArray(length: number) {
    return Array(length);
  }

}
