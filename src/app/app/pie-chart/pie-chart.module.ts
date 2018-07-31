import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class PieChartModule {
    public generatePieChart(dataProvider) {
        return {
          'type' : 'pie',
          'theme' : 'light',
          'titleField'  : 'category',
          'valueField'  : 'value',
          'dataProvider'  : dataProvider,
          'export': {
              'enabled': true
          },
          'angle': 0
        }
    }
}
