import { Component, OnInit } from '@angular/core';
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.scss']
})
export class CustomerPageComponent implements OnInit {

  constructor(private  _router: Router) { }

  ngOnInit(): void {
  }

  loadPage(link: string) {
    this._router.navigate(['/customer/'+link]).then();
  }
}
