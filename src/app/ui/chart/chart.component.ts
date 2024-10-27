import {
  Component,
  input,
  AfterViewInit,
  ElementRef,
  ViewChild,
} from '@angular/core';
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
  ChartConfiguration,
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
  protected chart: Chart | undefined;

  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;
  myChart = input.required<ChartConfiguration>();

  ngAfterViewInit() {
    // Initial render
    if (this.myChart()) {
      this.renderChart(this.myChart());
    }
  }

  ngOnChanges() {
    // Handle updates
    if (this.myChart() && this.chartCanvas) {
      this.renderChart(this.myChart());
    }
  }

  renderChart(chartConf: ChartConfiguration) {
    // Destroy existing chart if it exists
    if (this.chart) {
      this.chart.destroy();
    }

    // Create new chart
    this.chart = new Chart(this.chartCanvas.nativeElement, chartConf);
  }
}
