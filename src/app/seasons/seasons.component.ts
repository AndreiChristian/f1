import { Component, OnInit } from '@angular/core';
import { SeasonsService } from './seasons.service';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.scss'],
})
export class SeasonsComponent implements OnInit {
  selectedSeason: number = 2023;

  constructor(
    private seasonsService: SeasonsService
  ) {}

  ngOnInit(): void {
    this.seasonsService.getSeasonData(this.selectedSeason);
  }
  onSelectedValueChanged() {
    this.seasonsService.getSeasonData(this.selectedSeason);
  }
}
