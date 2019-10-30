import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BootstrapModalComponent } from './bootstrap-modal/bootstrap-modal.component';
import { LoaderModule } from './loader/loader.module';

@NgModule({
  declarations: [
    AppComponent,
    BootstrapModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
