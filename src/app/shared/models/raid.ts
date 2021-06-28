import {Boss} from './boss';

export interface Raid {
  id?: string;
  name: string;
  bosses?: Boss[];
}
