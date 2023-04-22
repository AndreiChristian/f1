import { Component, OnInit } from '@angular/core';
import { CircuitsService } from '../circuits.service';

@Component({
  selector: 'app-circuits-table',
  templateUrl: './circuits-table.component.html',
  styleUrls: ['./circuits-table.component.scss'],
})
export class CircuitsTableComponent implements OnInit {
  constructor(private circuitService: CircuitsService) {}

  ngOnInit(): void {
    this.circuitService.circuits$.subscribe((data) => console.log(data));
  }
}
