import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.scss'],
})
export class SeasonsComponent implements OnInit {
  selectedSeason: number = 2023;

  constructor(private http: HttpClient) {}

  raceTable: any;

  ngOnInit(): void {
    this.http
      .get(`https://ergast.com/api/f1/${this.selectedSeason}/results/1.json`)
      .subscribe((data: any) => {
        this.raceTable = data.MRData.RaceTable.Races;
        console.log(this.raceTable);
      });
  }
  onSelectedValueChanged() {}
}
