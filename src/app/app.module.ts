import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { IntroComponent } from './components/intro/intro.component';
import { ProjectComponent } from './components/project/project.component';
import { ContactFormComponent } from './components/contact/contact.component';
import { NavbarModule } from './modules/navbar/navbar.module';
import { DetailsModule } from './modules/details/details.module';
import { FooterModule } from './modules/footer/footer.module';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    IntroComponent,
    ProjectComponent,
    ContactFormComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,

    NavbarModule,
    DetailsModule,
    FooterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
