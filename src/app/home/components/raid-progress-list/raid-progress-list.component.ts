import {Component, Input, OnInit} from '@angular/core';
import {Raid} from '../../../shared/models/raid';

@Component({
  selector: 'app-raid-progress-list',
  templateUrl: './raid-progress-list.component.html',
  styleUrls: ['./raid-progress-list.component.scss']
})
export class RaidProgressListComponent implements OnInit {

  @Input()
  raids: Raid[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
