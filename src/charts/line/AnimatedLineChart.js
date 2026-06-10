import React from 'react';
import { LineChart } from 'react-native-gifted-charts';

const data = [
  { value: 30 },
  { value: 60 },
  { value: 40 },
  { value: 90 },
  { value: 70 },
];

const AnimatedLineChart = () => {
  return (
    <LineChart
      data={data}
      isAnimated
      color="#2ECC71"
      thickness={4}
    />
  );
};

export default AnimatedLineChart;