import { ChartConfiguration } from 'chart.js';
import { ConfigChart } from '../types/config-chart';

export abstract class MyChart<T> {
  config! : ChartConfiguration;

  abstract create(config: ConfigChart): void;

  render(): ChartConfiguration {
    return this.config;
  }
}
