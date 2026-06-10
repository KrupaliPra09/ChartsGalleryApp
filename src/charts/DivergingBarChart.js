import React from 'react';
import { View } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';

const data = [
  {
    value: -80,
    label: 'Jan',
    frontColor: '#FF6B6B',
  },

  {
    value: 60,
    label: 'Feb',
    frontColor: '#4A90E2',
  },

  {
    value: -40,
    label: 'Mar',
    frontColor: '#FF9F43',
  },

  {
    value: 90,
    label: 'Apr',
    frontColor: '#2ECC71',
  },

  {
    value: -55,
    label: 'May',
    frontColor: '#FF6B6B',
  },

  {
    value: 70,
    label: 'Jun',
    frontColor: '#4A90E2',
  },
];

const DivergingBarChart = () => {
  return (
    <View>
      <BarChart
        data={data}
        barWidth={28}
        spacing={24}
        roundedTop
        roundedBottom
        hideRules={false}
        xAxisThickness={1}
        yAxisThickness={1}
        yAxisTextStyle={{ color: 'gray' }}
        noOfSections={5}
      />
    </View>
  );
};

export default DivergingBarChart;