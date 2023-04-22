import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  seasons$: Observable<any[]>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.seasons$ = this.http.get('http://ergast.com/api/f1/seasons.json')
      .pipe(
        map((data: any) => data.MRData.SeasonTable.Seasons)
      );
  }
}
