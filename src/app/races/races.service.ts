import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RacesService {
  private racesSubject = new BehaviorSubject<any>(null);
  racesData$: Observable<any> = this.racesSubject.asObservable();

  constructor(private http: HttpClient) {}

  getSeasonData(selectedSeason: number) {
    this.http
      .get(`https://ergast.com/api/f1/${selectedSeason}/results/1.json`)
      .pipe(map((data: any) => data.MRData.RaceTable.Races))
      .subscribe((data: any) => this.racesSubject.next(data));
  }
}
