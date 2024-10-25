import { EnumChart } from "../enums/enum-chart";
import { MyChart } from "./chart";

export class BarChart extends MyChart {

  constructor() {
    super();
  }

  override create(): any {
    console.log('creating bar chart');
    this.type = EnumChart.Bar;
    console.log(this.type)
  }
}
