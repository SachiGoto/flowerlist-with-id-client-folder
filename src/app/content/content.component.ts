import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service/service.service';
import{Information} from '../interface/json.interface';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(private http:ServiceService) { }
  objects:Information[]=[];
  firstName:string='';

  display(){
    console.log(this.firstName);
  }

  ngOnInit(): void {

    this.http.getInformationFromServer().subscribe((object) =>{
     this.objects = object;
  })

}
}
