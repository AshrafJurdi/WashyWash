import React from "react";
import Histogram from "react-chart-histogram";
/**
 *this component displays data of the the amount of orders that I made during the past year, the past 4 months, the current month and the current week.
 *
 * @class Data
 * @extends {React.Component}
 */
class Data extends React.Component {
  constructor() {
    super();

    var d = new Date();
    var newMonth = d.getMonth() - 1;
    if (newMonth < 0) {
      newMonth += 12;
      d.setYear(d.getYear() - 1);
    }
    d.setMonth(newMonth);

    this.state = {
      Data: [
        { month: newMonth, orders: 55 },
        { month: "February", orders: 66 },
        { month: "March", orders: 88 }
      ]
    };
  }
  /**
   *this returns a column graph that displays the figures
   *
   * @returns Histogram
   * @memberof Data
   */
  render() {
    const labels = [
      this.state.Data[0].month,
      this.state.Data[1].month,
      this.state.Data[2].month
    ];
    const data = [
      this.state.Data[0].orders,
      this.state.Data[1].orders,
      this.state.Data[2].orders
    ];
    const options = { fillColor: "red", strokeColor: "#0000FF" };
    return (
      <div>
        <Histogram
          xLabels={labels}
          yValues={data}
          width="400"
          height="200"
          options={options}
        />
      </div>
    );
  }
}
export default Data;
