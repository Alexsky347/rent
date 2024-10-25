type chartType = 'line' | 'bar' | 'radar' | 'doughnut' | 'polarArea' | 'bubble' | 'pie' | 'scatter';

interface ChartDataset {
  label: string;
  data: number[];
  backgroundColor: string;
  borderColor: string;
  borderWidth: number;
}

interface ChartData {
  labels: string[];
  datasets: ChartDataset[];
}

interface ChartOptions {
  responsive: boolean;
  maintainAspectRatio: boolean;
  title: {
    display: boolean;
    text: string;
  };
  legend: {
    display: boolean;
    position: string;
  };
}

export interface ItChart {
  type: chartType;
  data: ChartData;
  options?: ChartOptions;
}

