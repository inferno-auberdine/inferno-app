import {Component, Input, OnInit} from '@angular/core';
import {Raid} from '../../../../shared/models/raid';

@Component({
  selector: 'app-raid-progress-card',
  templateUrl: './raid-progress-card.component.html',
  styleUrls: ['./raid-progress-card.component.scss']
})
export class RaidProgressCardComponent implements OnInit {

  @Input()
  raids: Raid[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
