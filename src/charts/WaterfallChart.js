import React from 'react';
import { View } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';

const data = [
  {
    value: 200,
    label: 'Start',
    frontColor: '#4A90E2',
  },

  {
    value: 80,
    label: 'Sales',
    frontColor: '#2ECC71',
  },

  {
    value: -50,
    label: 'Expense',
    frontColor: '#FF6B6B',
  },

  {
    value: 40,
    label: 'Invest',
    frontColor: '#F5A623',
  },

  {
    value: -30,
    label: 'Tax',
    frontColor: '#FF6B6B',
  },

  {
    value: 240,
    label: 'Final',
    frontColor: '#8E44AD',
  },
];

const WaterfallChart = () => {
  return (
    <View>
      <BarChart
        data={data}
        barWidth={30}
        spacing={22}
        roundedTop
        roundedBottom
        hideRules={false}
        xAxisThickness={1}
        yAxisThickness={1}
        noOfSections={6}
        yAxisTextStyle={{
          color: 'gray',
        }}
      />
    </View>
  );
};

export default WaterfallChart;