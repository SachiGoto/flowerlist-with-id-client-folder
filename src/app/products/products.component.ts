import { Component, OnInit } from '@angular/core';
import{ServiceService} from '../service/service.service'



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products:any[]=[];
  constructor(private productService:ServiceService){
  }




  ngOnInit(): void {
       this.productService.getProductsFromServer().subscribe((items)=>{
            this.products = items;
       });


      }
    }
