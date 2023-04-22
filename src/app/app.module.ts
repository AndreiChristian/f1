import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SeasonsComponent } from './seasons/seasons.component';
import { ListComponent } from './seasons/list/list.component';
import { DetailComponent } from './seasons/detail/detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { MaterialModule } from './material.module';
import { SeasonsTableComponent } from './seasons/seasons-table/seasons-table.component';
import { RacesComponent } from './races/races.component';
import { RacesTableComponent } from './races/races-table/races-table.component';
import { RacesListComponent } from './races/races-list/races-list.component';
import { RacesItemComponent } from './races/races-item/races-item.component';
import { CircuitsComponent } from './circuits/circuits.component';
import { CircuitsItemComponent } from './circuits/circuits-item/circuits-item.component';
import { CircuitsListComponent } from './circuits/circuits-list/circuits-list.component';
import { CircuitsTableComponent } from './circuits/circuits-table/circuits-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SeasonsComponent,
    ListComponent,
    DetailComponent,
    NavigationComponent,
    SeasonsTableComponent,
    RacesComponent,
    RacesTableComponent,
    RacesListComponent,
    RacesItemComponent,
    CircuitsComponent,
    CircuitsItemComponent,
    CircuitsListComponent,
    CircuitsTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [MaterialModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
