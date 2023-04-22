import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SeasonsComponent } from './seasons/seasons.component';
import { DetailComponent } from './seasons/detail/detail.component';
import { ListComponent } from './seasons/list/list.component';
import { RacesComponent } from './races/races.component';
import { RacesListComponent } from './races/races-list/races-list.component';
import { RacesItemComponent } from './races/races-item/races-item.component';
import { CircuitsComponent } from './circuits/circuits.component';
import { CircuitsListComponent } from './circuits/circuits-list/circuits-list.component';
import { CircuitsItemComponent } from './circuits/circuits-item/circuits-item.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'seasons',
    component: SeasonsComponent,
    children: [
      { path: '', component: ListComponent },
      { path: ':id', component: DetailComponent },
    ],
  },
  {
    path: 'races',
    component: RacesComponent,
    children: [
      { path: '', component: RacesListComponent },
      { path: ':id', component: RacesItemComponent },
    ],
  },
  {
    path: 'circuits',
    component: CircuitsComponent,
    children: [
      { path: '', component: CircuitsListComponent },
      { path: ':id', component: CircuitsItemComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
