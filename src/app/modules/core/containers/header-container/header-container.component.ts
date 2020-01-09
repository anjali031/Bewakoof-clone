import { Component, OnInit } from '@angular/core';

export type DressTypes = 'Misty Pink' | 'Jet Black' | 'Metior Grey' | 'Aqua Green';

@Component({
  selector: 'app-header-container',
  templateUrl: './header-container.component.html',
  styleUrls: ['./header-container.component.less']
})
export class HeaderContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
