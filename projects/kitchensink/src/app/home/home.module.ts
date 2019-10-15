import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {HomeRoutingModule} from './home-routing.module';

// import {HeaderModule} from 'testLib/lib/components/layout/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    // HeaderModule
    HomeRoutingModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
