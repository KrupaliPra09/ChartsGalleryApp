import React from 'react';
import { PieChart } from 'react-native-gifted-charts';

const pieData = [
  {
    value: 50,
    gradientCenterColor: '#177AD5',
    color: '#79D2DE',
  },
  {
    value: 30,
    gradientCenterColor: '#ED6665',
    color: '#FFB3B3',
  },
  {
    value: 20,
    gradientCenterColor: '#FFC300',
    color: '#FFE082',
  },
];

const GradientPieChart = () => {
  return (
    <PieChart
      data={pieData}
      donut
      showGradient
    />
  );
};

export default GradientPieChart;