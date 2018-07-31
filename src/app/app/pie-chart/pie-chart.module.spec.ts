import { PieChartModule } from './pie-chart.module';

describe('PieChartModule', () => {
  let pieChartModule: PieChartModule;

  beforeEach(() => {
    pieChartModule = new PieChartModule();
  });

  it('should create an instance', () => {
    expect(pieChartModule).toBeTruthy();
  });
});
