import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeListContainerComponent } from './containers/home-list-container/home-list-container.component';
import { HomesRoutingModule } from './homes-routing.module';
import { FiltersComponent } from './components/filters/filters.component';
import { HomeListComponent } from './home-list/home-list.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [HomeListContainerComponent, FiltersComponent, HomeListComponent, HomeComponent],
  imports: [
    CommonModule,
    HomesRoutingModule
  ]
})
export class HomesModule { }
