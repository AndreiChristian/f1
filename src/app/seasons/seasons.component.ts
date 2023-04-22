import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.scss'],
})
export class SeasonsComponent implements OnInit {
  seasons: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('http://ergast.com/api/f1/seasons.json')
      .subscribe((data: any) => {
        this.seasons = data.MRData.SeasonTable.Seasons;
      });
  }
}
