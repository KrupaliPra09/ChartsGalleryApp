import React from 'react';
import { PieChart } from 'react-native-gifted-charts';

const pieData = [
  {
    value: 40,
    color: '#177AD5',
    text: '40%',
  },
  {
    value: 30,
    color: '#79D2DE',
    text: '30%',
  },
  {
    value: 20,
    color: '#ED6665',
    text: '20%',
  },
  {
    value: 10,
    color: '#FFC300',
    text: '10%',
  },
];

const PieWithTextChart = () => {
  return (
    <PieChart
      donut
      showText
      textColor="black"
      radius={90}
      data={pieData}
    />
  );
};

export default PieWithTextChart;