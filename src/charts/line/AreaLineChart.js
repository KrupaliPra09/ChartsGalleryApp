import React from 'react';
import { LineChart } from 'react-native-gifted-charts';

const data = [
  { value: 20 },
  { value: 50 },
  { value: 40 },
  { value: 85 },
  { value: 70 },
];

const AreaLineChart = () => {
  return (
    <LineChart
      areaChart
      curved
      data={data}
      startFillColor="#177AD5"
      endFillColor="#FFFFFF"
      startOpacity={0.8}
      endOpacity={0.2}
      color="#177AD5"
    />
  );
};

export default AreaLineChart;