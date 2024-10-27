import { Component } from '@angular/core';
import { BarChart } from '../../core/models/classes/bar-chart';
import { ChartComponent } from '../../ui/chart/chart.component';
import { ChartConfiguration } from 'chart.js';
import { ConfigChart } from '../../core/models/types/config-chart';
import { LineChart } from '../../core/models/classes/line-chart';

@Component({
  selector: 'app-monitoring',
  standalone: true,
  imports: [ChartComponent],
  templateUrl: './monitoring.component.html',
  styleUrl: './monitoring.component.scss',
})
export class MonitoringComponent {
  lineChart!: ChartConfiguration;
  barChart!: ChartConfiguration;
  horizontalBarChart!: ChartConfiguration;
  barChartConfig: ConfigChart;

  constructor() {
    const labels = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
    ];
    this.barChartConfig = {
      data: [65, 59, 80, 81, 56, 55, 40],
      labels: labels,
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };
    const barChart = new BarChart();
    barChart.create(this.barChartConfig);
    this.barChart = barChart.render();

    const horizontalBarChart = new BarChart();
    horizontalBarChart.create({...this.barChartConfig, options: {indexAxis: 'y'}});
    this.horizontalBarChart = horizontalBarChart.render();

    const lineChart = new LineChart();
    lineChart.create(this.barChartConfig);
    this.lineChart = lineChart.render();
  }
  ngOnInit() {
    //test on update chart
    setTimeout(() => {
      const lineChart = new LineChart();
      lineChart.create(this.barChartConfig);
      this.lineChart = lineChart.render();
    }, 5000);
  }
}
