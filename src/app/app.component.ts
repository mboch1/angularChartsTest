import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';
import { PieChartModule } from './app/pie-chart/pie-chart.module';
import { BarChartModule } from './app/bar-chart/bar-chart.module';
import { LineChartModule } from './app/line-chart/line-chart.module';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
    // pie charts:
    private chart1: AmChart;
    private chart2: AmChart;
    // bar charts:
    private chart3: AmChart;
    private chart4: AmChart;
    // line charts:
    private chart5: AmChart;
    private chart6: AmChart;

    constructor(
        private AmCharts: AmChartsService,
        private pieCharts: PieChartModule,
        private lineCharts: LineChartModule,
        private barCharts: BarChartModule
    ) {}

    makeRandomDataProvider() {
      const dataProvider = [];
      for (let i = 0; i < 8; i++) {
          dataProvider.push({
              'category' : 'category ' + i,
              'value' : Math.floor(Math.random() * (+100 - +1)) + +1,
              'value1' : Math.floor(Math.random() * (+100 - +1)) + +1,
              'value2' : Math.floor(Math.random() * (+100 - +1)) + +1,
              'value3' : Math.floor(Math.random() * (+100 - +1)) + +1,
          });
      }
      return dataProvider;
    }

    ngOnInit() {
      // Create chartdiv1
      this.chart1 = this.AmCharts.makeChart('chartdiv1', this.pieCharts.generatePieChart(this.makeRandomDataProvider()));
      // Create chartdiv2
      // this.chart2 = this.AmCharts.makeChart('chartdiv2', this.pieCharts.generatePieChart(this.makeRandomDataProvider()));
      // Create chartdiv1
      this.chart3 = this.AmCharts.makeChart('chartdiv3', this.barCharts.generateBarChart(this.makeRandomDataProvider()));
      // Create chartdiv2
      // this.chart4 = this.AmCharts.makeChart('chartdiv4', this.barCharts.generateBarChart(this.makeRandomDataProvider()));
      // // Create chartdiv1
      this.chart5 = this.AmCharts.makeChart('chartdiv5', this.lineCharts.generateLineChart(this.makeRandomDataProvider()));
      // // Create chartdiv2
      // this.chart6 = this.AmCharts.makeChart('chartdiv6', this.lineCharts.generateLineChart(this.makeRandomDataProvider3()));
    }

    ngOnDestroy() {
      // Cleanup chartdiv2
      if (this.chart2 || this.chart1) {
        this.AmCharts.destroyChart(this.chart1);
        this.AmCharts.destroyChart(this.chart2);
      }
    }
}
