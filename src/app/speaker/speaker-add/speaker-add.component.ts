import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Speaker } from 'src/app/_models/Speaker';

@Component({
  selector: 'app-speaker-add',
  templateUrl: './speaker-add.component.html',
  styleUrls: ['./speaker-add.component.css'],
})
export class SpeakerAddComponent implements OnInit {
  @Input() speaker: Speaker = new Speaker(
    0,
    '',
    '',
    '',
    new Date(),
    0,
    true,
    '',
    1
  );
  //create emitter
  @Output() speakerAdd: EventEmitter<Speaker> = new EventEmitter<Speaker>();

  addSpeaker() {
    //fire emitter
    // console.log(typeof this.speaker.birthdate);
    this.speakerAdd.emit(this.speaker);
  }

  constructor() {}

  ngOnInit(): void {}
}
