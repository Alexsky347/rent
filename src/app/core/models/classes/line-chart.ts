import { EnumChart } from '../enums/enum-chart';
import { MyChart } from './my-chart';
import { ConfigChart } from '../types/config-chart';

export class LineChart extends MyChart<'line'> {
  constructor() {
    super();
  }

  override create(config: ConfigChart): void {
    const { data, labels, options } = config;
    this.config = {
      data: {
        labels,
        datasets: [
          {
            label: 'My First Dataset',
            data: data,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)',
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options,
      type: EnumChart.Line,
    };
  }
}
