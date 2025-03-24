import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-products',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  isSidePanelVisible: boolean = false;
  productObj : any = {
  "productId": 0,
  "productSku": "string",
  "productName": "string",
  "productPrice": 0,
  "productShortName": "string",
  "productDescription": "string",
  "createdDate": new Date(),
  "deliveryTimeSpan": "string",
  "categoryId": 2147483647,
  "productImageUrl": "string",
  "userId": 0
}


  openSidePanel() {
    this.isSidePanelVisible = true;
  }

  closeSidePanel() {
    this.isSidePanelVisible = false;
  }
}
