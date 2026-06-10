import { Image, Text, View } from "react-native";
import { BarChart } from "react-native-gifted-charts";

const TooltipBarChart = () => {
  return (
    <View
      style={{
        paddingVertical: 100,
        backgroundColor: '#3F107A',
        flex: 1,
      }}>
      <Image
        source={{
          uri: 'https://github.com/Abhinandan-Kushwaha/chart-images/blob/main/images/walls.png?raw=true',
        }}
        style={{
          position: 'absolute',
          opacity: 0.6,
          top: 32,
          height: 300,
          width: 400,
          resizeMode: 'contain',
        }}
      />
      <View style={{marginLeft: 50}}>
        <BarChart
          data={[
            {value: 20},
            {value: 40},
            {value: 30},
            {value: 50},
            {value: 40},
          ]}
          isThreeD
          initialSpacing={20}
          barMarginBottom={10}
          showGradient
          gradientColor={'#fc84ff'}
          hideYAxisText
          yAxisThickness={0}
          xAxisThickness={6}
          xAxisColor={'#c919ff'}
          frontColor={'transparent'}
          sideColor={'#ff00d0'}
          topColor={'#ff66f4'}
          barStyle={{
            borderWidth: 4,
            borderColor: '#fc84ff',
            shadowColor: '#fc84ff',
            shadowOffset: {width: 0, height: 4},
            shadowOpacity: 1,
            shadowRadius: 8,
            elevation: 10,
          }}
          hideRules
          height={120}
          barWidth={20}
          isAnimated
          renderTooltip={(item, index) => {
            return (
              <View
                style={{
                  marginBottom: 20,
                  marginLeft: -6,
                  backgroundColor: '#ffcefe',
                  paddingHorizontal: 6,
                  paddingVertical: 4,
                  borderRadius: 4,
                }}>
                <Text>{item.value}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

export default TooltipBarChart;
