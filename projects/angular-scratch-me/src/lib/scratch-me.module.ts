import { NgModule } from '@angular/core';
import { ScratchMeComponent } from './scratch-me.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    ScratchMeComponent
  ],
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [
    ScratchMeComponent
  ]
})
export class ScratchMeModule { }
