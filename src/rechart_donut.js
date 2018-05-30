import React from 'react';

import { PieChart, ResponsiveContainer, Pie, Legend, Tooltip, Cell } from 'recharts';

import './rechart_donut.css';

const data = [{name: 'Backups', value: 75000}, {name: 'Downtime', value: 40000}, {name: 'Network Engineer Compensation', value: 19000}, {name: 'Power Consumption', value: 12000}, {name: 'Cabling', value: 3000}]
const colors = ['#00A179', '#25AE8C', '#64C4AC', '#8BD3C1', '#B0E0D4']

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = outerRadius + (outerRadius - innerRadius);
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="#00A179" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

class DonutChart extends React.Component {

  render() {

    return (
    <div className="chartBox">
      <ResponsiveContainer width="100%" height={350} paddingTop="20px" minHeight={350}>
        <PieChart marginLeft={500}>
          <Pie data={this.props.info} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={90} outerRadius={120} startAngle={90} endAngle={450} fill="#82ca9d" label={renderCustomizedLabel}>
            {
              data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index]} />
              ))
            }
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <h2 x={Pie.cx} y={Pie.cy} fill="black" dominantBaseline="central" className="savingsClass">
        ${this.props.savings}
      </h2>
    </div>
    );
  }
}
export default DonutChart;
