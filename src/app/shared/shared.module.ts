import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeHTMLPipe } from './pipes/safe-html.pipe';



@NgModule({
  declarations: [SafeHTMLPipe],
  imports: [
    CommonModule
  ],
  exports: [SafeHTMLPipe]
})
export class SharedModule { }
