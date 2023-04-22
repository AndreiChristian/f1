import { Component, OnInit } from '@angular/core';
import { SeasonsService } from '../seasons.service';
@Component({
  selector: 'app-seasons-table',
  templateUrl: './seasons-table.component.html',
  styleUrls: ['./seasons-table.component.scss'],
})
export class SeasonsTableComponent implements OnInit {
  displayedColumns: string[] = ['round', 'name', 'driver', 'constructor'];
  dataSource: any;

  constructor(private seasonsService: SeasonsService) {}

  ngOnInit(): void {
    this.seasonsService.seasonData$.subscribe((data: any) => {
      this.dataSource = data;
      console.log(this.dataSource);
    });
  }

  onClickRow(row:any) {
    console.log(row);
  }
}
