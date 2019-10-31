import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'fl-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  selfLayout: string;

  constructor() {}

  ngOnInit() {}
}
