import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Raid} from '../models/raid';
import {HttpClient} from '@angular/common/http';
import {Uris} from '../models/uris';

@Injectable({
  providedIn: 'root'
})
export class RaidService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Raid[]> {
    return this.http.get<Raid[]>(Uris.RAIDS.ALL);
  }
}
