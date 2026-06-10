import React from 'react';
import { PieChart } from 'react-native-gifted-charts';

const pieData = [
  {
    value: 60,
    color: '#177AD5',
  },
  {
    value: 40,
    color: '#ED6665',
  },
];

const SemiCirclePieChart = () => {
  return (
    <PieChart
      data={pieData}
      semiCircle
      radius={100}
    />
  );
};

export default SemiCirclePieChart;