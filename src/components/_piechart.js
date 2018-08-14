import { Chart } from "react-google-charts"
import * as React from "react"
import "../globals/styles/chart.css"

const options = {
  colors: ['#00A179', '#25AE8C', '#64C4AC', '#8BD3C1', '#B0E0D4'],
  pieHole: 0.5,
  pieSliceTextStyle: {
    color: 'white',
  },
  title: "",
  marginLeft: 'auto',
  marginRight: 'auto',
};

const data = [
  ["Category", "Amount"],
  ["Backups", 75000],
  ["Downtime", 40000],
  ["Network Engineer Compensation", 19000],
  ["Power Consumption", 12000],
  ["Cabling", 3000],
];


class PieChart extends React.Component {
  render() {
    return (
      <div className="chartContainer">
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width="800px"
          height="400px"
          marginLeft='auto'
          marginRight='auto'
          alignSelf='center'
          alignItems='center'
          alignContent='center'
        />
      </div>
    );
  }
}

export default PieChart;
