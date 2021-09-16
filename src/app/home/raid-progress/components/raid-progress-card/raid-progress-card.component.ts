import {Component, OnInit} from '@angular/core';
import {Raid} from '../../../../shared/models/raid';
import {RaidService} from '../../../../shared/services/raid.service';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-raid-progress-card',
  templateUrl: './raid-progress-card.component.html',
  styleUrls: ['./raid-progress-card.component.scss']
})
export class RaidProgressCardComponent implements OnInit {

  raids: Raid[] = [];
  isLoading = true;

  constructor(private raidService: RaidService) {
  }

  ngOnInit(): void {
    this.raidService
      .getAll()
      .pipe(finalize(() => this.isLoading = false))
      .subscribe(raids => this.raids = raids);
  }

}
