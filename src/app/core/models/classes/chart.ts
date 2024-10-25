import { TypeChart } from "../types/type-chart";
import { ItMyChart } from "../interfaces/it-my-chart";

export abstract class MyChart {
  type!: TypeChart;

  constructor() {}

  abstract create(): any

  render(): ItMyChart {
    return {
      type: this.type
    }
  }
}
