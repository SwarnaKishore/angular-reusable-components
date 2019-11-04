import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BootstrapModalComponent } from './bootstrap-modal/bootstrap-modal.component';
import { LoaderModule } from './modules/loader/loader.module';
import { ButtonModule } from './modules/button/button.module';
import { ButtonsViewComponent } from './components/buttons-view/buttons-view.component';

@NgModule({
  declarations: [
    AppComponent,
    BootstrapModalComponent,
    ButtonsViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoaderModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
