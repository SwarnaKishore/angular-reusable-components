import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BootstrapModalComponent } from './bootstrap-modal/bootstrap-modal.component';
import { LoaderModule } from './modules/loader/loader.module';
import { ButtonModule } from './modules/button/button.module';
import { AlertModule } from './modules/alert/alert.module';
import { HomeComponent } from './home/home.component';
import { ComponentsViewComponent } from './components-view/components-view.component';
import { ButtonsViewComponent } from './components-view/components-usage/buttons-view/buttons-view.component';
import { AlertsViewComponent } from './components-view/components-usage/alerts-view/alerts-view.component';

@NgModule({
  declarations: [
    AppComponent,
    BootstrapModalComponent,
    ButtonsViewComponent,
    AlertsViewComponent,
    HomeComponent,
    ComponentsViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoaderModule,
    ButtonModule,
    AlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
