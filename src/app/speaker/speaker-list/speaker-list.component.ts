import { Component, OnInit } from '@angular/core';
import { Speaker } from '../../_models/Speaker';

@Component({
  selector: 'app-speaker-list',
  templateUrl: './speaker-list.component.html',
  styleUrls: ['./speaker-list.component.css'],
})
export class SpeakerListComponent implements OnInit {
  speakers: Speaker[] = [
    new Speaker(
      1,
      'hola',
      '../../assets/image1.jpeg',
      'egypt',
      new Date(1990, 1, 6),
      5,
      false,
      'alex',
      5
    ),
    new Speaker(
      2,
      'hola2',
      '../../assets/image2.jpeg',
      'egypt',
      new Date(1990, 2, 6),
      5,
      false,
      'smart',
      4
    ),
    new Speaker(
      3,
      'hola3',
      '../../assets/image3.jpeg',
      'egypt',
      new Date(1990, 3, 6),
      5,
      false,
      'mansoura',
      3
    ),
  ];

  show: boolean = true;
  nameFilter: string = '';
  speakerDetails = { ...this.speakers[0] };
  speakerEditDetails = { ...this.speakers[0] };
  // speakerDetails:Speaker;
  showDetails(item: Speaker) {
    this.speakerDetails = item;
  }
  update(item: Speaker) {
    this.speakerEditDetails = item;
  }
  delete(n: number) {
    if (confirm('are you sure')) {
      for (let index = 0; index < this.speakers.length; index++) {
        if (this.speakers[index]._id == n) {
          this.speakers.splice(index, 1);
          return;
        }
      }
    }
  }
  addNewSpeaker(speakerUpdate: Speaker) {
    let find = false;

    for (let item of this.speakers) {
      if (item._id == speakerUpdate._id) {
        item.name = speakerUpdate.name;
        item.birthdate = speakerUpdate.birthdate;
        item.hourRate = speakerUpdate.hourRate;
        item.address = speakerUpdate.address;
        item.image = speakerUpdate.image;
        item.isMarried = speakerUpdate.isMarried;
        item.government = speakerUpdate.government;
        item.rating = speakerUpdate.rating;
        find = true;
      }
    }
    if (!find) {
      // console.log(speakerUpdate.birthdate);
      this.nameFilter = speakerUpdate.name;
      this.speakers.push({ ...speakerUpdate });
      this.nameFilter = '';
    }
  }
  showImages() {
    if (this.show == true) {
      this.show = false;
    } else {
      this.show = true;
    }
  }
  filterChanged(s: string) {
    // this.speakers = this.speakers.filter((speaker) => speaker.name.includes(s));
  }

  constructor() {}

  ngOnInit(): void {}
}
