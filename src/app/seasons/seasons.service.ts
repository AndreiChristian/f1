import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SeasonsService {
  private seasonsSubject = new BehaviorSubject<any>(null);
  seasonData$: Observable<any> = this.seasonsSubject.asObservable();

  constructor(private http: HttpClient) {}

  getSeasonData(selectedSeason: number) {
    this.http
      .get(`https://ergast.com/api/f1/${selectedSeason}/results/1.json`)
      .pipe(map((data: any) => data.MRData.RaceTable.Races))
      .subscribe((data: any) => this.seasonsSubject.next(data));
    // .subscribe((data: any) => {
    //   this.seasonsData = data.MRData.RaceTable.Races;
    //   console.log(this.seasonsData)
    // });
  }
}
