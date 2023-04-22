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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SeasonsComponent,
    ListComponent,
    DetailComponent,
    NavigationComponent,
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
