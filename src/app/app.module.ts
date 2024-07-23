import { ButtonModule } from './modules/button/button.module';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarModule } from './modules/navbar/navbar.module';
import { DetailsModule } from './modules/details/details.module';
import { FooterModule } from './modules/footer/footer.module';
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,

    ButtonModule,
    NavbarModule,
    DetailsModule,
    FooterModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
