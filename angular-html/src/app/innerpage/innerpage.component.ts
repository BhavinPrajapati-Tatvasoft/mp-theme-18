import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  task: string;
  userType: string;
  status: string;
  actions: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Jane Smith', task: 'Lorem ipsum is dummy text', userType: 'Admin', status: '<span class="badge badge-primary">Active</span>', actions: '<a href="#" title="Edit"><img src="./assets/images/edit-icon.svg"></a> <a href="#" title="Delete"><img src="./assets/images/delete-icon.svg"></a>' },
  { name: 'Jane Smith', task: 'Lorem ipsum is dummy text', userType: 'User', status: '<span class="badge badge-danger">Inactive</span>', actions: '<a href="#" title="Edit"><img src="./assets/images/edit-icon.svg"></a> <a href="#" title="Delete"><img src="./assets/images/delete-icon.svg"></a>' },
  { name: 'Jane Smith', task: 'Lorem ipsum is dummy text', userType: 'Admin', status: '<span class="badge badge-primary">Active</span>', actions: '<a href="#" title="Edit"><img src="./assets/images/edit-icon.svg"></a> <a href="#" title="Delete"><img src="./assets/images/delete-icon.svg"></a>' },
  { name: 'Jane Smith', task: 'Lorem ipsum is dummy text', userType: 'User', status: '<span class="badge badge-danger">Inactive</span>', actions: '<a href="#" title="Edit"><img src="./assets/images/edit-icon.svg"></a> <a href="#" title="Delete"><img src="./assets/images/delete-icon.svg"></a>' },
  { name: 'Jane Smith', task: 'Lorem ipsum is dummy text', userType: 'Admin', status: '<span class="badge badge-primary">Active</span>', actions: '<a href="#" title="Edit"><img src="./assets/images/edit-icon.svg"></a> <a href="#" title="Delete"><img src="./assets/images/delete-icon.svg"></a>' },

];
@Component({
  selector: 'app-innerpage',
  templateUrl: './innerpage.component.html',
  styles: [
  ]
})
export class InnerpageComponent implements OnInit {
  displayedColumns: string[] = ['name', 'task', 'userType', 'status', 'actions'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
