import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CircuitsService {
  private CircuitSubject = new BehaviorSubject<any>(null);
  circuits$: Observable<any> = this.CircuitSubject.asObservable();

  constructor(private http: HttpClient) {}

  getCircuits() {
    this.http
      .get('http://ergast.com/api/f1/circuits.json?limit=100')
      .pipe(map((data: any) => data.MRData.CircuitTable.Circuits))
      .subscribe((data) => this.CircuitSubject.next(data));
  }
}
