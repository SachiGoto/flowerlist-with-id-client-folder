import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ServiceService} from '../service/service.service'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute, private nodeHttp:ServiceService) { }
  product:any;

  ngOnInit(): void {

    let productID:any = this.route.snapshot.paramMap.get("productID");

    this.nodeHttp.getProductsDetailsFromServer(productID).subscribe((item)=>{
      this.product = item;
    })
    console.log(productID);
  }

}
