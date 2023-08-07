import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreparateRoutingModule } from './preparate-routing.module';
import { PreparatePageComponent } from './pages/preparate-page/preparate-page.component';


@NgModule({
  declarations: [
    PreparatePageComponent
  ],
  imports: [
    CommonModule,
    PreparateRoutingModule
  ]
})
export class PreparateModule { }
