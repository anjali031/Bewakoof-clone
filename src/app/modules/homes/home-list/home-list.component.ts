import { Component, OnInit, Input } from '@angular/core';
import { DataState } from '../../core/services/data.service';
import { Dress } from '../containers/home-list-container/home-list-container.component';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.less']
})
export class HomeListComponent implements OnInit {
  
  @Input() dress: DataState<Dress[]>;
  constructor() { }

  ngOnInit() {
  }

}
