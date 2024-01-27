import { EventEmitter, Injectable, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Product} from "../../models/product.models";

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [
    {
      id: 1,
      name: 'Iphone 10',
      price: 1000,
      description: 'Iphone 10',
      image:
        'https://th.bing.com/th/id/OIP.DH9BbfWK3GFAv8xTph6HsAHaKr?w=124&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      quantity: 10,
      status: 'valid',
    },
    {
      id: 2,
      name: 'Iphone 11',

      price: 1100,
      description: 'Iphone 11',
      image:
        'https://th.bing.com/th/id/OIP.8I6G69Mc9_vMaup87LIUuwHaHa?w=184&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      quantity: 10,
      status: 'valid',
    },
    {
      id: 3,
      name: 'Iphone 12',
      image:
        'https://th.bing.com/th/id/OIP.PSd6wxGdQ7mv_KlVXQlb2AHaHa?w=180&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      price: 1200,
      description: 'Iphone 12',
      quantity: 10,
      status: 'valid',
    },
    {
      id: 4,
      name: 'Iphone 13',
      image:
        'https://th.bing.com/th/id/OIP.jqxIECdT_dPmRABToeIYjwHaJ_?w=140&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      price: 1300,
      description: 'Iphone 13',
      quantity: 10,
      status: 'valid',
    },
    {
      id: 5,
      name: 'Iphone 14',
      image:
        'https://th.bing.com/th/id/OIP.NO2hZlHS60Q4yfxIUxgqQQHaHa?w=179&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      price: 1400,
      description: 'Iphone 14',
      quantity: 10,
      status: 'valid',
    },
    {
      id: 6,
      name: 'Iphone 15',
      image:
        'https://th.bing.com/th/id/OIP.n66k4Rzb1EJGCkYCo2qKDQHaE7?w=274&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      price: 1500,
      description: 'Iphone 15',
      quantity: 10,
      status: 'valid',
    },
  ];
  //get itemInCart of cart service
  itemInCart: Product[] = [];

  formupdate = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    image: new FormControl(),
    quantity: new FormControl(),
    status: new FormControl(),
  });
  private itemlistCart: Product[] = [];
  constructor() {}

  //get all product
  getAllProduct(): Product[] {
    return this.products;
  }

  updateItem() {
    let newForm: Product = {
      id: this.formupdate.value.id,
      name: this.formupdate.value.name,
      price: this.formupdate.value.price,
      description: this.formupdate.value.description,
      image: this.formupdate.value.image,
      quantity: this.formupdate.value.quantity,
      status: this.formupdate.value.status,
    };
    const index = this.products.findIndex((item) => item.id === newForm.id);
    if (index != -1) {
      this.products[index] = newForm;
    }
  }

  removeItems(i: number) {
    const index = this.products.findIndex((item) => item.id === i);
    if (index != -1) {
      this.products.splice(index, 1);
    }
  }
}
