import React from 'react';
import {
    ScrollView,
    StyleSheet,
} from 'react-native';

import ChartSection from '../components/ChartSection';

import SimpleLineChart from '../charts/line/SimpleLineChart';
import CurvedLineChart from '../charts/line/CurvedLineChart';
import AreaLineChart from '../charts/line/AreaLineChart';
import AnimatedLineChart from '../charts/line/AnimatedLineChart';
import DashedLineChart from '../charts/line/DashedLineChart';
import VerticalLineChart from '../charts/line/VerticalLineChart';
import ScatterPlotChart from '../charts/line/ScatterPlotChart';
import AreaChart from '../charts/line/AreaChart';
import MultipleLinesChart from '../charts/line/MultipleLinesChart';
import NegativevaluesChart from '../charts/line/NegativevaluesChart';
import LineChartBicolor from '../charts/line/LineChartBicolor';

const LineChartsScreen = () => {
    return (
        <ScrollView style={styles.container}>

            <ChartSection title="Simple Line Chart">
                <SimpleLineChart />
            </ChartSection>

            <ChartSection title="Curved Line Chart">
                <CurvedLineChart />
            </ChartSection>

            <ChartSection title="Area Line Chart">
                <AreaLineChart />
            </ChartSection>

            <ChartSection title="Animated Line Chart">
                <AnimatedLineChart />
            </ChartSection>

            <ChartSection title="Dashed Line Chart">
                <DashedLineChart />
            </ChartSection>

            <ChartSection title="Vertical Line Chart">
                <VerticalLineChart />
            </ChartSection>

            <ChartSection title="Scatter Plot Chart">
                <ScatterPlotChart />
            </ChartSection>

            <ChartSection title="Area Chart">
                <AreaChart />
            </ChartSection>

            <ChartSection title="Multiple Lines Chart">
                <MultipleLinesChart />
            </ChartSection>

            <ChartSection title="Negativevalues Chart">
                <NegativevaluesChart />
            </ChartSection>

            <ChartSection title="Line Chart Bicolor">
                <LineChartBicolor />
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

export default LineChartsScreen;