import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MindRoutingModule } from './mind-routing.module';
import { MindComponent } from './mind.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    MindComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MindRoutingModule
  ]
})
export class MindModule { }
