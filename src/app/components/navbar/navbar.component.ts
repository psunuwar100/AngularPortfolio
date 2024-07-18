import { Component, HostListener, OnInit } from '@angular/core';
import { nav_ul } from '../array/dataArray';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
[x: string]: any;
  nav_ul = nav_ul
nav_item: any;
  constructor() { }

  ngOnInit(): void {
  }
}
