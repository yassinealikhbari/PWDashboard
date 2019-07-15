import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  messages: any = 1;
  @ViewChild('sidenav', {static: false}) sidenav: ElementRef;

  clicked: boolean;

  constructor() {
    this.clicked = this.clicked !== undefined;
  }

  ngOnInit() {
  }
}
