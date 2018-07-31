import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class BarChartModule {
    // PROBABLY ADD GRAPHS to the constructor and generate the settings from here
    public generateBarChart(dataProvider) {
        return {
            'type' : 'serial',
            'theme' : 'light',
            'graphs' : [
                {
                    'id': 'g1',
                    'valueField' : 'value',
                    'type' : 'column',
                    'balloonText': '[[category]]<br><b><span style=\'font-size:14px;\'>[[value]]</span></b>',
                    'lineThickness': 2,
                    'negativeLineColor': '#637bb6',
                    'fillAlphas' : 1
                },
                {
                    'id': 'g2',
                    'valueField' : 'value1',
                    'type' : 'column',
                    'balloonText': '[[category]]<br><b><span style=\'font-size:14px;\'>[[value1]]</span></b>',
                    'lineThickness': 2,
                    'negativeLineColor': '#637bb6',
                    'fillAlphas' : 0.75
                },
                {
                    'id': 'g3',
                    'valueField' : 'value2',
                    'type' : 'column',
                    'balloonText': '[[category]]<br><b><span style=\'font-size:14px;\'>[[value]]</span></b>',
                    'lineThickness': 2,
                    'negativeLineColor': '#637bb6',
                    'fillAlphas' : 0.5
                },
                {
                    'id': 'g4',
                    'valueField' : 'value3',
                    'type' : 'column',
                    'balloonText': '[[category]]<br><b><span style=\'font-size:14px;\'>[[value]]</span></b>',
                    'lineThickness': 2,
                    'negativeLineColor': '#637bb6',
                    'fillAlphas' : 0.25
                }
            ],
            'categoryField'  : 'category',
            'dataProvider'  : dataProvider,
            'export': {
              'enabled': true
            },
            'colors' : [
                "#FF6600", "#FCD202", "#B0DE09",
                "#0D8ECF", "#2A0CD0", "#CD0D74",
                "#CC0000", "#00CC00", "#0000CC",
                "#DDDDDD", "#999999", "#333333", "#990000"
            ],

        }
    }
}
