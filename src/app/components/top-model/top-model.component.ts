import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product/product.service';
import {Carousel} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {Card} from 'primeng/card';
import {PrimeTemplate} from 'primeng/api';
import {DialogModule} from 'primeng/dialog';
import {InputText} from 'primeng/inputtext';
import {NgOptimizedImage} from '@angular/common';
import {Avatar} from 'primeng/avatar';

@Component({
  selector: 'app-top-model',
  imports: [
    Carousel,
    ButtonModule,
    Card,
    PrimeTemplate,
    DialogModule,
    InputText,
    Avatar
  ],
  templateUrl: './top-model.component.html',
  styleUrl: './top-model.component.scss'
})
export class TopModelComponent implements OnInit {
  products: any | undefined;
  responsiveOptions: any[] | undefined;
  showVideoCallDialog: boolean = false;
  showLiveChatDialog: boolean = false;
  dialogHeading: string = 'Video Call';
  selectedModel: any = {};

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


}
