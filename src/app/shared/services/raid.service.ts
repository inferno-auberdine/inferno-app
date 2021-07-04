import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Raid} from '../models/raid';

@Injectable({
  providedIn: 'root'
})
export class RaidService {

  constructor() {
  }

  getAll(): Observable<Raid[]> {
    return of([{
      name: 'Karazhan',
      bosses: [{
        name: 'Quartiers des serviteurs',
        picture: 'https://wow.zamimg.com/images/wow/journal/ui-ej-boss-servant-quarters.png',
        killed: true
      }, {
        name: 'Attumen le Veneur',
        picture: 'https://wow.zamimg.com/images/wow/journal/ui-ej-boss-attumen-the-huntsman.png',
        killed: true
      }, {
        name: 'Moroes',
        picture: 'https://wow.zamimg.com/images/wow/journal/ui-ej-boss-moroes.png',
        killed: true
      }, {
        name: 'Damoiselle de vertu',
        picture: 'https://wow.zamimg.com/images/wow/journal/ui-ej-boss-maiden-of-virtue.png',
        killed: true
      }, {
        name: `L'Opéra`,
        picture: 'https://wow.zamimg.com/images/wow/journal/ui-ej-boss-opera.png',
        killed: true
      }, {
        name: 'Le Conservateur',
        picture: 'https://wow.zamimg.com/images/wow/journal/ui-ej-boss-the-curator.png',
        killed: true
      }, {
        name: `L'Ombre d’Aran`,
        picture: 'https://wow.zamimg.com/images/wow/journal/ui-ej-boss-shade-of-aran.png',
        killed: true
      }, {
        name: 'Terestian Malsabot',
        picture: 'https://wow.zamimg.com/images/wow/journal/ui-ej-boss-terestian-illhoof.png',
        killed: true
      },  {
        name: 'Dédain-du-Néant',
        picture: 'https://wow.zamimg.com/images/wow/journal/ui-ej-boss-netherspite.png',
        killed: false
      },  {
        name: 'Évènement de l’échiquier',
        picture: 'https://wow.zamimg.com/images/wow/journal/ui-ej-boss-chess-horde.png',
        killed: true
      },  {
        name: 'Plaie-de-Nuit',
        picture: 'https://wow.zamimg.com/images/wow/journal/ui-ej-boss-nightbane.png',
        killed: false
      },  {
        name: 'Prince Malchezaar',
        picture: 'https://wow.zamimg.com/images/wow/journal/ui-ej-boss-prince-malchezaar.png',
        killed: true
      }]
    }]);
  }
}
