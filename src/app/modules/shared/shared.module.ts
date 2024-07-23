import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from './intro/intro.component';
import { ProjectComponent } from './project/project.component';
import { ContactFormComponent } from './contact/contact.component';
import { ButtonComponent } from '../button/button/button.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [IntroComponent,
    ProjectComponent,
    ContactFormComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
    ],
  exports:[
    IntroComponent,
    ProjectComponent,
    ContactFormComponent,
    ButtonComponent
  ]
})
export class SharedModule { }
