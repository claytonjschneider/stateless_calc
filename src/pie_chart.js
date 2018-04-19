import React from 'react';
import { Chart } from 'react-google-charts';

class GoogleChart extends React.Component {
  constructor(props) {
    super(props);
    this.chartEvents = [
      {
        eventName: 'select',
        callback(Chart) {
            // Returns Chart so you can access props and  the ChartWrapper object from chart.wrapper
          console.log('Selected ', Chart.chart.getSelection());
        },
      },
    ];
    this.state = {
      options: {
        legend: 'none',
        chartArea: {"width": "100%", "height": "80%"}
      },
      data: [
        ['Area', 'Savings'],
        ['Backups', 75000],
        ['Downtime', 40000],
        ['Network Engineer Compensation', 19000],
        ['Power Consumption', 12000],
        ['Cabling', 3000],
      ],
    };
  }
  render() {
    return (
    <div className="chartDiv">
      <h2>
        $149,000 per year
      </h2>
      <Chart
        chartType="PieChart"
        data={this.state.data}
        options={this.state.options}
        graph_id="PieChart"
        width="100%"
        height="300px"
        chartEvents={this.chartEvents}
      />
    </div>
    );
  }
}
export default GoogleChart;
