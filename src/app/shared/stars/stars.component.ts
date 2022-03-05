import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css'],
})
export class StarsComponent implements OnInit, OnChanges {
  faStar = faStar;
  @Input() rating = 3;
  cropWidth = 90;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.cropWidth = this.rating * (90 / 5);
  }

  ngOnInit(): void {
    this.cropWidth = this.rating * (90 / 5);
  }
}
