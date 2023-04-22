import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SeasonsComponent } from './seasons/seasons.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'seasons', component: SeasonsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
