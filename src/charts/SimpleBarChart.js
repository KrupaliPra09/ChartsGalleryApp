import React from 'react';
import { BarChart } from 'react-native-gifted-charts';

const data = [
  {
    value: 50,
    label: 'Jan',
  },
  {
    value: 80,
    label: 'Feb',
  },
  {
    value: 65,
    label: 'Mar',
  },
  {
    value: 90,
    label: 'Apr',
  },
];

const SimpleBarChart = () => {
  return (
    <BarChart
      data={data}
      barWidth={30}
      spacing={25}
    />
  );
};

export default SimpleBarChart;