import React from 'react';
import { View } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';

const data = [
  { value: 20, label: 'Jan' },
  { value: 45, label: 'Feb' },
  { value: 28, label: 'Mar' },
  { value: 80, label: 'Apr' },
  { value: 99, label: 'May' },
];

const VerticalLineChart = () => {
  return (
    <View>
      <LineChart
        data={data}
        thickness={3}
        color="#177AD5"
        hideDataPoints={false}
        rotateLabel
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

export default VerticalLineChart;