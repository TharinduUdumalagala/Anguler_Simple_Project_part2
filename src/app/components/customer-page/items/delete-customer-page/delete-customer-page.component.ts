import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {error} from "@angular/compiler/src/util";

@Component({
  selector: 'app-delete-customer-page',
  templateUrl: './delete-customer-page.component.html',
  styleUrls: ['./delete-customer-page.component.scss']
})
export class DeleteCustomerPageComponent implements OnInit {

  customerId: String | null ='';

  constructor(private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    // this.customerId = this._activatedRoute.snapshot.paramMap.get('id');

    this._activatedRoute.paramMap.subscribe(response=>{
      this.customerId = response.get('id');
    }, error=>{
      alert(error)
    });

  }

}
