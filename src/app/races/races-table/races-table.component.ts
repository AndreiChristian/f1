import { Component } from '@angular/core';
import { RacesService } from '../races.service';

@Component({
  selector: 'app-races-table',
  templateUrl: './races-table.component.html',
  styleUrls: ['./races-table.component.scss'],
})
export class RacesTableComponent {
  displayedColumns: string[] = ['round', 'name', 'driver', 'constructor'];
  dataSource: any;

  constructor(private racesService: RacesService) {}

  ngOnInit(): void {
    this.racesService.racesData$.subscribe((data: any) => {
      this.dataSource = data;
      console.log(this.dataSource);
    });
  }

  onClickRow(row: any) {
    console.log(row);
  }
}
