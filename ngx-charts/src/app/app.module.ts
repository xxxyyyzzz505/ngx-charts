import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgxChartsModule } from '@swimlane/ngx-charts';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NormalizedHorizontalComponent } from './bar-charts/normalized-horizontal/normalized-horizontal.component';
import { StackedVerticalComponent } from './bar-charts/stacked-vertical/stacked-vertical.component';

@NgModule({
  declarations: [
    AppComponent,
    NormalizedHorizontalComponent,
    StackedVerticalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
