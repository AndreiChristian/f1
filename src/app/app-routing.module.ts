import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SeasonsComponent } from './seasons/seasons.component';
import { DetailComponent } from './seasons/detail/detail.component';
import { ListComponent } from './seasons/list/list.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
