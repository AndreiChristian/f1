import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RacesService } from '../races.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-races-table',
  templateUrl: './races-table.component.html',
  styleUrls: ['./races-table.component.scss'],
})
export class RacesTableComponent implements OnInit {
  displayedColumns: string[] = ['round', 'name', 'driver', 'constructor'];
  dataSource: any;

  constructor(private racesService: RacesService, private http: HttpClient) {}

  ngOnInit(): void {
    this.racesService.racesData$.subscribe((data) => (this.dataSource = data));
  }

  onClickRow(row: any) {
    console.log(row);
  }
}
