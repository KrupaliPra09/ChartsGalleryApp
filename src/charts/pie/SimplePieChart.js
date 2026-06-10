import React from 'react';
import { PieChart } from 'react-native-gifted-charts';

const pieData = [
  {
    value: 40,
    color: '#177AD5',
  },
  {
    value: 30,
    color: '#79D2DE',
  },
  {
    value: 20,
    color: '#ED6665',
  },
  {
    value: 10,
    color: '#FFC300',
  },
];

const SimplePieChart = () => {
  return (
    <PieChart
      data={pieData}
    />
  );
};

export default SimplePieChart;