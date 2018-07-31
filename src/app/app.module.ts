import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PieChartModule } from './app/pie-chart/pie-chart.module';
import { BarChartModule } from './app/bar-chart/bar-chart.module';
import { LineChartModule } from './app/line-chart/line-chart.module';
import { AmChartsModule } from "@amcharts/amcharts3-angular";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PieChartModule,
    LineChartModule,
    BarChartModule,
    AmChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
