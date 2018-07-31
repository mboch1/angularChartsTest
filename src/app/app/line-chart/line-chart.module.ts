import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class LineChartModule {
    public generateLineChart(dataProvider) {
        return {
          'type' : 'serial',
          'theme' : 'light',
          'valueField'  : 'value',
          'dataProvider'  : dataProvider,
          'categoryField'  : 'category',

          'graphs': [
              {
                'id': 'g1',
                'balloonText': '[[category]]<br><b><span style=\'font-size:14px;\'>[[value]]</span></b>',
                'bullet': 'round',
                'bulletSize': 8,
                'lineThickness': 2,
                'negativeLineColor': '#637bb6',
                'type': 'line',
                'valueField': 'value'
            },
            {
                'id': 'g2',
                'balloonText': '[[category]]<br><b><span style=\'font-size:14px;\'>[[value]]</span></b>',
                'bullet': 'round',
                'bulletSize': 8,
                'lineThickness': 2,
                'negativeLineColor': '#637bb6',
                'type': 'line',
                'valueField': 'value1'
            },
            {
                'id': 'g3',
                'balloonText': '[[category]]<br><b><span style=\'font-size:14px;\'>[[value]]</span></b>',
                'bullet': 'round',
                'bulletSize': 8,
                'lineThickness': 2,
                'negativeLineColor': '#637bb6',
                'type': 'line',
                'valueField': 'value2'
            },
            {
                'id': 'g4',
                'balloonText': '[[category]]<br><b><span style=\'font-size:14px;\'>[[value]]</span></b>',
                'bullet': 'round',
                'bulletSize': 8,
                'lineThickness': 2,
                'negativeLineColor': '#637bb6',
                'type': 'line',
                'valueField': 'value3'
            }
        ],
        'chartScrollbar': {
            'graph': 'g1',
            'gridAlpha': 0,
            'color': '#888888',
            'scrollbarHeight': 55,
            'backgroundAlpha': 0,
            'selectedBackgroundAlpha': 0.1,
            'selectedBackgroundColor': '#888888',
            'graphFillAlpha': 0,
            'autoGridCount': true,
            'selectedGraphFillAlpha': 0,
            'graphLineAlpha': 0.2,
            'graphLineColor': '#c2c2c2',
            'selectedGraphLineColor': '#888888',
            'selectedGraphLineAlpha': 1
        },
        'colors' : [
            "#FF6600", "#FCD202", "#B0DE09",
            "#0D8ECF", "#2A0CD0", "#CD0D74",
            "#CC0000", "#00CC00", "#0000CC",
            "#DDDDDD", "#999999", "#333333", "#990000"
        ]
        }
    }
}
