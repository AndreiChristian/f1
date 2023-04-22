import { Component, OnInit } from '@angular/core';
import { CircuitsService } from './circuits.service';

@Component({
  selector: 'app-circuits',
  templateUrl: './circuits.component.html',
  styleUrls: ['./circuits.component.scss']
})
export class CircuitsComponent implements OnInit {

  constructor( private circuitsService: CircuitsService){}

  ngOnInit(): void {
    this.circuitsService.getCircuits()
  }

}
