import { Component, HostListener, OnInit } from '@angular/core';
import { nav_ul } from 'src/app/components/array/dataArray';
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
  // TypeScript code
  const mobileMenu: HTMLElement | null = document.getElementById('mobile-menu');
  const navbarMenu: HTMLElement | null = document.querySelector('.navbar ul.top');

  if (mobileMenu && navbarMenu) {
    mobileMenu.addEventListener('click', () => {
      navbarMenu.classList.toggle('active');
    });
  }

  }
}
