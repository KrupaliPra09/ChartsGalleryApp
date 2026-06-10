import React from 'react';
import { LineChart } from 'react-native-gifted-charts';

const data = [
  { value: 15 },
  { value: 35 },
  { value: 55 },
  { value: 45 },
  { value: 75 },
];

const DashedLineChart = () => {
  return (
    <LineChart
      data={data}
      color="#8E44AD"
      thickness={3}
      dashWidth={6}
      dashGap={4}
    />
  );
};

export default DashedLineChart;