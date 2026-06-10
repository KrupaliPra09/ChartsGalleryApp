import React from 'react';
import { View } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';

const data = [
  {
    value: 20,
    dataPointText: '•',
  },

  {
    value: 45,
    dataPointText: '•',
  },

  {
    value: 28,
    dataPointText: '•',
  },

  {
    value: 80,
    dataPointText: '•',
  },

  {
    value: 99,
    dataPointText: '•',
  },
];

const  ScatterPlotChart = () => {
  return (
    <View>
      <LineChart
        data={data}
        thickness={0}
        hideRules={false}
        color="transparent"
        dataPointsColor="#177AD5"
        dataPointsRadius={8}
        hideYAxisText={false}
        xAxisLabelTextStyle={{
          color: 'gray',
        }}
        yAxisTextStyle={{
          color: 'gray',
        }}
      />
    </View>
  );
};

export default ScatterPlotChart;