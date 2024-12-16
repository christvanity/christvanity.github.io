import { Component } from '@angular/core';
import {Card} from 'primeng/card';
import {PrimeTemplate} from 'primeng/api';
import {Button} from 'primeng/button';

@Component({
  selector: 'app-highlight',
  imports: [
    Card,
    PrimeTemplate,
    Button
  ],
  templateUrl: './highlight.component.html',
  styleUrl: './highlight.component.scss'
})
export class HighlightComponent {

}
