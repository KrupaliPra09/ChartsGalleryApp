import React from 'react';
import { BarChart } from 'react-native-gifted-charts';

const stackedData = [
  {
    stacks: [
      {
        value: 30,
        color: '#4A90E2',
      },
      {
        value: 20,
        color: '#50E3C2',
      },
    ],
    label: 'Jan',
  },

  {
    stacks: [
      {
        value: 50,
        color: '#4A90E2',
      },
      {
        value: 40,
        color: '#50E3C2',
      },
    ],
    label: 'Feb',
  },
];

const StackedBarChart = () => {
  return (
    <BarChart
      stackData={stackedData}
      barWidth={40}
    />
  );
};

export default StackedBarChart;