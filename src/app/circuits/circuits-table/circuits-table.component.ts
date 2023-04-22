import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CircuitsService } from '../circuits.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-circuits-table',
  templateUrl: './circuits-table.component.html',
  styleUrls: ['./circuits-table.component.scss'],
})
export class CircuitsTableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'country', 'city', 'lat', 'long'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private circuitService: CircuitsService) {}

  ngOnInit(): void {
    this.circuitService.circuits$.subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
