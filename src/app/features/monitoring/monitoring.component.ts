import { Component } from '@angular/core';
import { PieChart } from '../../core/models/classes/pie-chart';
import { BarChart } from '../../core/models/classes/bar-chart';
import { ChartComponent } from '../../ui/chart/chart.component';
import { ItMyChart } from '../../core/models/interfaces/it-my-chart';

@Component({
  selector: 'app-monitoring',
  standalone: true,
  imports: [ChartComponent],
  templateUrl: './monitoring.component.html',
  styleUrl: './monitoring.component.scss'
})
export class MonitoringComponent {
  pieChart: ItMyChart;
  barChart: ItMyChart;

  constructor() {
    const pieChart = new PieChart();
    pieChart.create();
    this.pieChart = pieChart.render();

    const barChart = new BarChart();
    barChart.create();
    this.barChart = barChart.render();
  }
}
