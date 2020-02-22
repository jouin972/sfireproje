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

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import localEn from '@angular/common/locales/en';
import localHi from '@angular/common/locales/hi';

registerLocaleData(localeEs, 'es');
registerLocaleData(localEn, 'en');
registerLocaleData(localHi, 'es');

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
