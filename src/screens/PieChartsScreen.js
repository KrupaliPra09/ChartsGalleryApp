import React from 'react';
import {
  ScrollView,
  StyleSheet,
} from 'react-native';

import ChartSection from '../components/ChartSection';

import SimplePieChart from '../charts/pie/SimplePieChart';
import DonutChart from '../charts/pie/DonutChart';
import PieWithTextChart from '../charts/pie/PieWithTextChart';
import GradientPieChart from '../charts/pie/GradientPieChart';
import ExplodedPieChart from '../charts/pie/ExplodedPieChart';
import SemiCirclePieChart from '../charts/pie/SemiCirclePieChart';
import AnimatedPieChart from '../charts/pie/AnimatedPieChart';
import ThreeDcharts from '../charts/pie/ThreeDcharts';
import Shadoweffects from '../charts/pie/Shadoweffects';
import SplitPiesections from '../charts/pie/SplitPiesections';
import FocuspiesectiononPress from '../charts/pie/FocuspiesectiononPress';

const PieChartsScreen = () => {
  return (
    <ScrollView style={styles.container}>

      <ChartSection title="Simple Pie Chart">
        <SimplePieChart />
      </ChartSection>

      <ChartSection title="Donut Chart">
        <DonutChart />
      </ChartSection>

      <ChartSection title="Pie Chart With Text">
        <PieWithTextChart />
      </ChartSection>

      <ChartSection title="Gradient Pie Chart">
        <GradientPieChart />
      </ChartSection>

      <ChartSection title="Exploded Pie Chart">
        <ExplodedPieChart />
      </ChartSection>

      <ChartSection title="Semi Circle Pie Chart">
        <SemiCirclePieChart />
      </ChartSection>

      <ChartSection title="Animated Pie Chart">
        <AnimatedPieChart />
      </ChartSection>

      <ChartSection title="3D Pie Chart">
        <ThreeDcharts />
      </ChartSection>

      <ChartSection title="Shadow effects">
        <Shadoweffects />
      </ChartSection>

      <ChartSection title="Split Pie sections">
        <SplitPiesections />
      </ChartSection>

      <ChartSection title="Focus piesection onPress">
        <FocuspiesectiononPress />
      </ChartSection>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    padding: 16,
  },
});

export default PieChartsScreen;