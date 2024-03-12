import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toggleMenu() {
    document.body.classList.toggle('toggle-nav');
  }
  toggleSearch() {
    document.body.classList.toggle('open-search');
  }
}
