import React from 'react';
import { LineChart } from 'react-native-gifted-charts';

const data = [
  { value: 10 },
  { value: 40 },
  { value: 25 },
  { value: 70 },
  { value: 90 },
];

const CurvedLineChart = () => {
  return (
    <LineChart
      data={data}
      curved
      color="#FF6B6B"
      thickness={4}
    />
  );
};

export default CurvedLineChart;