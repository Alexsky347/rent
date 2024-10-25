import {
  Component,
  input,
  AfterViewInit,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { TypeChart } from '../../core/models/types/type-chart';
import { ItMyChart } from '../../core/models/interfaces/it-my-chart';
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  LineController,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the required components
Chart.register(
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  LineController,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [],
  template: `
    <div class="chart-container">
      <canvas #chartCanvas></canvas>
    </div>
  `,
  styleUrl: './chart.component.scss',
})
export class ChartComponent implements AfterViewInit {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;
  protected chart: Chart | undefined;
  protected type!: TypeChart;

  myChart = input.required<ItMyChart>();

  ngAfterViewInit() {
    // Initial render
    if (this.myChart()) {
      this.createChart(this.myChart());
      this.renderChart();
    }
  }

  ngOnChanges() {
    // Handle updates
    if (this.myChart() && this.chartCanvas) {
      this.createChart(this.myChart());
      this.renderChart();
    }
  }

  createChart(options: ItMyChart) {
    this.type = options.type ?? 'bar';
  }

  renderChart() {
    // Destroy existing chart if it exists
    if (this.chart) {
      this.chart.destroy();
    }

    // Create new chart
    this.chart = new Chart(this.chartCanvas.nativeElement, {
      type: this.type,
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
