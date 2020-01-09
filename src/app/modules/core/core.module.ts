import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderContainerComponent } from './containers/header-container/header-container.component';
import { NavComponent } from './components/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HeaderContainerComponent, NavComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [HeaderContainerComponent]
})
export class CoreModule { }
