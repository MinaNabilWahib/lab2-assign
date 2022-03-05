import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StarsComponent } from './stars/stars.component';

@NgModule({
  declarations: [StarsComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [StarsComponent],
})
export class SharedModule {}
