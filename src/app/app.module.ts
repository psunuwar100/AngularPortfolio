import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IntroComponent } from './components/intro/intro.component';
import { DetailsComponent } from './components/details/details.component';
import { ProjectComponent } from './components/project/project.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactFormComponent } from './components/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroComponent,
    DetailsComponent,
    ProjectComponent,
    ContactFormComponent,
    FooterComponent,
    ButtonComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
