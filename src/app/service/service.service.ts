import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{Information} from '../interface/json.interface';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  private url= "http://localhost:4400/content";
  private productUrl="http://localhost:4500/products"

  getInformationFromServer(){
    return this.http.get<Information[]>(this.url)
  }

  getProductsDetailsFromServer(productID:number){
     return this.http.get<any>(this.productUrl + '/' + productID)
  }

  getProductsFromServer(){
    return this.http.get<any[]>(this.productUrl)
  }

}
