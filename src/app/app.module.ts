import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from './core/core.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { SpeakerListComponent } from './speaker/speaker-list/speaker-list.component';
import { SpeakerAddComponent } from './speaker/speaker-add/speaker-add.component';
import { SpeakerDetailsComponent } from './speaker/speaker-details/speaker-details.component';
import { FormatDatePipe } from './format-date.pipe';
import { PowerTo2Pipe } from './power-to2.pipe';
import { ConvertStringPipe } from './convert-string.pipe';
import { HighLightDirective } from './high-light.directive';
import { ArraySplicePipe } from './array-splice.pipe';

@NgModule({
  declarations: [AppComponent, SpeakerListComponent, SpeakerAddComponent, SpeakerDetailsComponent, FormatDatePipe, PowerTo2Pipe, ConvertStringPipe, HighLightDirective, ArraySplicePipe],
  imports: [BrowserModule, CoreModule, NgbModule, FormsModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
