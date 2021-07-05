import {environment} from '../../../environments/environment';

export class Uris {
  static readonly RAIDS = class {
    static readonly ALL = `${environment.apiUrl}/api/raids`;
  };
}
