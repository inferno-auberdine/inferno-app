import {Component, OnInit} from '@angular/core';
import {Raid} from '../shared/models/raid';
import {RaidService} from '../shared/services/raid.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  raids: Raid[] = [];

  constructor(private raidService: RaidService) {
  }

  ngOnInit(): void {
    this.raidService
      .getAll()
      .subscribe(
        raids => this.raids = raids,
        err => console.log(err) // TODO : améliorer la gestion des erreurs (toasts ?)
      );
  }

}
