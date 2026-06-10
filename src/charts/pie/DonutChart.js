import React from 'react';
import { PieChart } from 'react-native-gifted-charts';

const pieData = [
  {
    value: 54,
    color: '#177AD5',
  },
  {
    value: 30,
    color: '#79D2DE',
  },
  {
    value: 16,
    color: '#ED6665',
  },
];

const DonutChart = () => {
  return (
    <PieChart
      donut
      radius={90}
      innerRadius={50}
      data={pieData}
    />
  );
};

export default DonutChart;