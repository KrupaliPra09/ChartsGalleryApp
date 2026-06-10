import React from 'react';
import { BarChart } from 'react-native-gifted-charts';

const data = [
  {
    value: 40,
    label: 'A',
  },
  {
    value: 70,
    label: 'B',
  },
  {
    value: 90,
    label: 'C',
  },
];

const HorizontalBarChart = () => {
  return (
    <BarChart
      horizontal
      data={data}
    />
  );
};

export default HorizontalBarChart;