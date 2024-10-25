import { MyChart } from "./chart";
import { EnumChart } from "../enums/enum-chart";

export class PieChart extends MyChart {
  constructor() {
    super();
  }

  override create(): any{
    this.type = EnumChart.Pie;
  }
}

