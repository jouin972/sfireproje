import { AppComponent } from './components/app.component';
import { AppModule } from './app.module';
import { NgModule } from '@angular/core';
import {
  ServerModule,
  ServerTransferStateModule
} from '@angular/platform-server';

import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

import { FlexLayoutServerModule } from '@angular/flex-layout/server';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule,
    ModuleMapLoaderModule,
    FlexLayoutServerModule
  ],

  bootstrap: [AppComponent]
})
export class AppServerModule {}
