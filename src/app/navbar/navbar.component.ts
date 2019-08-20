import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'nga-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }


  navigateToProductDetail() {
    this._router.navigate(['/product']);
    // this._router.navigate(['/product'], {skipLocationChange: true})
  }

}
