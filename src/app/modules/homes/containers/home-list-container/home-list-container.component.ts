import { Component, OnInit } from '@angular/core';
import { DressTypes } from 'src/app/modules/core/containers/header-container/header-container.component';
import { DataService } from 'src/app/modules/core/services/data.service';

export interface Dress {
  type: DressTypes;
  title: string;
  price: number;
  image_url: string;
}

@Component({
  selector: 'app-home-list-container',
  templateUrl: './home-list-container.component.html',
  styleUrls: ['./home-list-container.component.less']
})
export class HomeListContainerComponent implements OnInit {

  dress$ = this.dataService.getDress$();

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.dataService.loadDress();
  }

}
