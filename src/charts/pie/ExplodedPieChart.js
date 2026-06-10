import React from 'react';
import { PieChart } from 'react-native-gifted-charts';

const pieData = [
  {
    value: 40,
    color: '#177AD5',
    focused: true,
  },
  {
    value: 30,
    color: '#79D2DE',
  },
  {
    value: 20,
    color: '#ED6665',
  },
];

const ExplodedPieChart = () => {
  return (
    <PieChart
      data={pieData}
      donut
    />
  );
};

export default ExplodedPieChart;