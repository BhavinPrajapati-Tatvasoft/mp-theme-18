import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {
  calendarOpen = false;
  folderOpen = false;
  analysticsOpen = false;
  pagesOpen = false;
  mailboxOpen = false;
  constructor() { }

  ngOnInit(): void {
  }
  hideMenu() {
    document.body.classList.remove('toggle-nav', 'open-search');
  }
  toggleCalendar() {
    this.calendarOpen = !this.calendarOpen;
    this.folderOpen = false;
    this.analysticsOpen = false;
    this.pagesOpen = false;
    this.mailboxOpen = false;
  }
  toggleFolder() {
    this.folderOpen = !this.folderOpen;
    this.calendarOpen = false;
    this.analysticsOpen = false;
    this.pagesOpen = false;
    this.mailboxOpen = false;
  }
  toggleAnalystics() {
    this.analysticsOpen = !this.analysticsOpen;
    this.folderOpen = false;
    this.calendarOpen = false;
    this.pagesOpen = false;
    this.mailboxOpen = false;
  }
  togglePages() {
    this.pagesOpen = !this.pagesOpen;
    this.folderOpen = false;
    this.calendarOpen = false;
    this.mailboxOpen = false;
    this.analysticsOpen = false;
  }
  toggleMailbox() {
    this.mailboxOpen = !this.mailboxOpen;
    this.folderOpen = false;
    this.calendarOpen = false;
    this.analysticsOpen = false;
    this.pagesOpen = false;
  }
}
