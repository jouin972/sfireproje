import { NgModule } from '@angular/core';

import { AppComponent } from './components';
import { AppRoutes } from './app.routes';
import { __IMPORTS, __DECLARATIONS, __PROVIDERS } from './components.barrel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  BrowserModule,
  BrowserTransferStateModule
} from '@angular/platform-browser';
import { TransferHttpCacheModule } from '@nguniversal/common';
@NgModule({
  declarations: [__DECLARATIONS],
  imports: [
    __IMPORTS,
    AppRoutes,
    BrowserTransferStateModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    TransferHttpCacheModule
  ],
  providers: [__PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule {}
