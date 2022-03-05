import { Component, Input, OnInit } from '@angular/core';
import { Speaker } from 'src/app/_models/Speaker';

@Component({
  selector: 'app-speaker-details',
  templateUrl: './speaker-details.component.html',
  styleUrls: ['./speaker-details.component.css'],
})
export class SpeakerDetailsComponent implements OnInit {
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

  constructor() {}

  ngOnInit(): void {}
}
