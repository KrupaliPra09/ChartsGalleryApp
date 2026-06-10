import React from 'react';
import { BarChart } from 'react-native-gifted-charts';

const data = [
  {
    value: 60,
    label: 'A',
    frontColor: '#4A90E2',
    gradientColor: '#50E3C2',
  },

  {
    value: 90,
    label: 'B',
    frontColor: '#FF6B6B',
    gradientColor: '#FFD93D',
  },
];

const GradientBarChart = () => {
  return (
    <BarChart
      data={data}
      showGradient
    />
  );
};

export default GradientBarChart;