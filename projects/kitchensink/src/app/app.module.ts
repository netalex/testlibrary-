import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
// import { HomeModule } from './home/home.module';
// import { HeaderModule } from 'testLib/lib/components/layout/header/header.module';
// import {HeaderModule} from '../../../test-lib/src/lib/components/layout/header/header.module';
// import {FooterModule} from '../../../test-lib/src/lib/components/layout/footer/footer.module';
import {HeaderModule} from 'testLib';
import {FooterModule} from 'testLib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    // HomeModule,
    AppRoutingModule,
    HeaderModule,
    HeaderModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
