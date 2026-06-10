import React from 'react';
import { LineChart } from 'react-native-gifted-charts';

const data = [
  { value: 20 },
  { value: 45 },
  { value: 28 },
  { value: 80 },
  { value: 99 },
];

const SimpleLineChart = () => {
  return (
    <LineChart
      data={data}
      thickness={3}
      color="#177AD5"
      hideDataPoints={false}
    />
  );
};

export default SimpleLineChart;