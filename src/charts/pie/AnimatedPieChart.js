import React from 'react';
import { PieChart } from 'react-native-gifted-charts';

const pieData = [
  {
    value: 45,
    color: '#177AD5',
  },
  {
    value: 25,
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

const AnimatedPieChart = () => {
  return (
    <PieChart
      data={pieData}
      donut
      isAnimated
    />
  );
};

export default AnimatedPieChart;