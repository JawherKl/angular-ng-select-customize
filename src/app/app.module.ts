import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgselectComponent } from './ngselect/ngselect.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, NgSelectModule],
  declarations: [AppComponent, NgselectComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
