import { Component } from '@angular/core';
import {ModelsComponent} from '../models/models.component';
import {TopModelComponent} from '../top-model/top-model.component';
import {HighlightComponent} from '../highlight/highlight.component';

@Component({
  selector: 'app-home',
  imports: [
    ModelsComponent,
    TopModelComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
