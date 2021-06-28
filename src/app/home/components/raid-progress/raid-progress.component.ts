import {Component, Input, OnInit} from '@angular/core';
import {Raid} from '../../../shared/models/raid';

@Component({
  selector: 'app-raid-progress',
  templateUrl: './raid-progress.component.html',
  styleUrls: ['./raid-progress.component.scss']
})
export class RaidProgressComponent implements OnInit {

  @Input()
  raid: Raid;
  preloadImages = [];
  progression: number;

  constructor() {
  }

  ngOnInit(): void {
    // Calcule de la progression globale du raid
    this.progression = this.raid
      .bosses
      ?.filter(boss => boss.killed)
      .length;
    // Il faut forcer le chargement des images de boss pour que le tooltip s'affiche correctement
    this.preloadImages = this.raid.bosses.map(boss => {
        const image = new Image();
        image.src = boss.picture;
        image.alt = boss.name;
        return image;
      }
    );
  }

}
