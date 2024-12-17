import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product/product.service';
import {Carousel} from 'primeng/carousel';
import {Button} from 'primeng/button';
import {Card} from 'primeng/card';
import {PrimeTemplate} from 'primeng/api';
import {Dialog} from 'primeng/dialog';
import {InputText} from 'primeng/inputtext';

@Component({
  selector: 'app-top-model',
  imports: [
    Carousel,
    Button,
    Card,
    PrimeTemplate,
    Dialog,
    InputText
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

  makeVideoCall() {
    this.showVideoCallDialog = true;
  }

  closeVideoCall() {
    this.showVideoCallDialog = false;
  }

  liveChat() {
    this.showVideoCallDialog = false; // Ensure video call dialog is closed
    alert('Live Chat feature is not yet implemented.');
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
