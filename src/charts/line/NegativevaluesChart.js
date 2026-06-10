import { LineChart } from "react-native-gifted-charts";

const NegativevaluesChart = () => {
  const data = [
    {value: 15, label: 'Mon'},
    {value: 30, label: 'Tue'},
    {value: -23, label: 'Wed'},
    {value: 40, label: 'Thu'},
    {value: -16, label: 'Fri'},
    {value: 40, label: 'Sat'},
  ];
  
  return <LineChart data={data} />
}

export default NegativevaluesChart;