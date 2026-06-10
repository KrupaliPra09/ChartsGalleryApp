import React from 'react';
import { BarChart } from 'react-native-gifted-charts';

const data = [
  {
    value: 30,
    label: 'Jan',
  },
  {
    value: 70,
    label: 'Feb',
  },
  {
    value: 50,
    label: 'Mar',
  },
];

const AnimatedBarChart = () => {
  return (
    <BarChart
      data={data}
      isAnimated
    />
  );
};

export default AnimatedBarChart;

