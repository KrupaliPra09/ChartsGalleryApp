import React from 'react';
import { View } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';

const data = [
  {
    value: 50,
    label: 'Jan',
    spacing: 2,
    labelWidth: 30,
    labelTextStyle: { color: 'gray' },
    frontColor: '#177AD5',
  },

  {
    value: 40,
    frontColor: '#ED6665',
  },

  {
    value: 75,
    label: 'Feb',
    spacing: 2,
    labelWidth: 30,
    labelTextStyle: { color: 'gray' },
    frontColor: '#177AD5',
  },

  {
    value: 55,
    frontColor: '#ED6665',
  },

  {
    value: 90,
    label: 'Mar',
    spacing: 2,
    labelWidth: 30,
    labelTextStyle: { color: 'gray' },
    frontColor: '#177AD5',
  },

  {
    value: 70,
    frontColor: '#ED6665',
  },
];

const ClusteredBarChart = () => {
  return (
    <View>
      <BarChart
        data={data}
        barWidth={22}
        spacing={24}
        roundedTop
        hideRules
        xAxisThickness={1}
        yAxisThickness={1}
        yAxisTextStyle={{ color: 'gray' }}
        noOfSections={5}
      />
    </View>
  );
};

export default ClusteredBarChart;