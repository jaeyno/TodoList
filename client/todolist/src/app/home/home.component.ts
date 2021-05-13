import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lists: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.demoList();
  }

  demoList() {
    this.lists.push({id: 0, listName: "Foo", completed: 5, pending: 10});
    this.lists.push({id: 1,listName: "Bar", completed: 15, pending: 10});
    this.lists.push({id: 2,listName: "Faa", completed: 0, pending: 2});
    this.lists.push({id: 3,listName: "Laa", completed: 30, pending: 10});
  }
}
