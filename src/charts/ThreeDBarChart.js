import React from 'react';
import { View, Text } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';

const data = [
  { value: 30, label: 'Jan', frontColor: '#4A90E2' },
  { value: 70, label: 'Feb', frontColor: '#1E88E5' },
  { value: 50, label: 'Mar', frontColor: '#1565C0' },
  { value: 90, label: 'Apr', frontColor: '#0D47A1' },
];

const ThreeDChart = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff', padding: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 20 }}>
        3D Style Bar Chart
      </Text>

      <BarChart
        data={data}
        isAnimated
        barWidth={26}
        spacing={22}
        barBorderRadius={8}
        initialSpacing={10}
        hideRules
        yAxisThickness={0}
        xAxisThickness={0}
        noOfSections={4}
        maxValue={100}
        showGradient
        gradientColor="#001F54"
      />
    </View>
  );
};

export default ThreeDChart;