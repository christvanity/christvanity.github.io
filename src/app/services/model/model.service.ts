import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModelService {
  topModel = [
    {
      id: 'f230fh0g3',
      name: 'Pretty Prince',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      location: ''
    },
    {
      id: 'f230fh0g3',
      name: 'Crystal Climber',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      location: ''
    },
    {
      id: 'Aura Jem',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      location: ''
    },
    {
      id: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      location: ''
    },
  ]
    availableModel = [
    {
      id: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      location: ''
    },
    {
      id: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      location: ''
    },
    {
      id: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      location: ''
    },
    {
      id: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      location: ''
    },
  ]

  constructor(

  ) { }

  getTopModel() {
    return this.topModel;
  }
}
