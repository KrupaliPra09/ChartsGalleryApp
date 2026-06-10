import React from 'react';
import { BarChart } from 'react-native-gifted-charts';

const data = [
  {
    value: 20,
    label: 'Mon',
  },
  {
    value: 45,
    label: 'Tue',
  },
  {
    value: 80,
    label: 'Wed',
  },
];

const RoundedBarChart = () => {
  return (
    <BarChart
      data={data}
      roundedTop
      roundedBottom
    />
  );
};

export default RoundedBarChart;
