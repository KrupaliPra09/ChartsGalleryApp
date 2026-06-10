import React from 'react';
import { View } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';

const data = [
  {
    value: 20,
    label: 'Jan',
  },

  {
    value: 45,
    label: 'Feb',
  },

  {
    value: 28,
    label: 'Mar',
  },

  {
    value: 80,
    label: 'Apr',
  },

  {
    value: 99,
    label: 'May',
  },

  {
    value: 43,
    label: 'Jun',
  },
];

const AreaChart = () => {
  return (
    <View>
      <LineChart
        areaChart
        curved
        data={data}
        thickness={3}
        color="#177AD5"
        startFillColor="#177AD5"
        endFillColor="#FFFFFF"
        startOpacity={0.8}
        endOpacity={0.2}
        hideDataPoints={false}
        dataPointsColor="#177AD5"
        yAxisTextStyle={{
          color: 'gray',
        }}
        xAxisLabelTextStyle={{
          color: 'gray',
        }}
      />
    </View>
  );
};

export default AreaChart;