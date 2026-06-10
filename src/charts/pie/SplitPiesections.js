import { PieChart } from "react-native-gifted-charts";

const SplitPiesections = () => {
    const pieData = [
        { value: 54, color: '#177AD5' },
        { value: 40, color: '#79D2DE' },
        { value: 20, color: '#ED6665', shiftX: -12, shiftY: -23 }
    ];
    return <PieChart data={pieData} />;
}

export default SplitPiesections;

