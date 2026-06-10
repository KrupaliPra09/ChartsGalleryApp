import React from 'react';
import {
    ScrollView,
    StyleSheet,
} from 'react-native';

import ChartSection from '../components/ChartSection';

import SimpleBarChart from '../charts/SimpleBarChart';
import HorizontalBarChart from '../charts/HorizontalBarChart';
import StackedBarChart from '../charts/StackedBarChart';
import RoundedBarChart from '../charts/RoundedBarChart';
import GradientBarChart from '../charts/GradientBarChart';
import AnimatedBarChart from '../charts/AnimatedBarChart';
import ClusteredBarChart from '../charts/ClusteredBarChart';
import DivergingBarChart from '../charts/DivergingBarChart';
import WaterfallChart from '../charts/WaterfallChart';
import ThreeDBarChart from '../charts/ThreeDBarChart';
import CappedBarChart from '../charts/CappedBarChart';
import TooltipBarChart from '../charts/TooltipBarChart';

const BarChartsScreen = () => {
    return (
        <ScrollView style={styles.container}>

            <ChartSection title="Simple Bar Chart">
                <SimpleBarChart />
            </ChartSection>

            <ChartSection title="Horizontal Bar Chart">
                <HorizontalBarChart />
            </ChartSection>

            <ChartSection title="Stacked Bar Chart">
                <StackedBarChart />
            </ChartSection>

            <ChartSection title="Rounded Bar Chart">
                <RoundedBarChart />
            </ChartSection>

            <ChartSection title="Gradient Bar Chart">
                <GradientBarChart />
            </ChartSection>

            <ChartSection title="Animated Bar Chart">
                <AnimatedBarChart />
            </ChartSection>

            <ChartSection title="Clustered Bar Chart">
                <ClusteredBarChart />
            </ChartSection>

            <ChartSection title="Diverging Bar Chart">
                <DivergingBarChart />
            </ChartSection>

            <ChartSection title="Waterfall Chart">
                <WaterfallChart />
            </ChartSection>

            <ChartSection title="3D Bar Chart">
                <ThreeDBarChart />
            </ChartSection>

            <ChartSection title="Capped Bar Chart">
                <CappedBarChart />
            </ChartSection>

            <ChartSection title="Tooltip Bar Chart">
                <TooltipBarChart />
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

export default BarChartsScreen;