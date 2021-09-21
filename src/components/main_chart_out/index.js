import React from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Dimensions,
  
} from "react-native";

import {
 LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

const line = {
  labels: ['S', 'T', 'Q', 'Q', 'S', 'S'],
  datasets: [
    {
      data: [
        Math.random() * 10,
        Math.random() * 10,
        Math.random() * 10,
        Math.random() * 10,
        Math.random() * 10,
        Math.random() * 10
      ],
    }
  ] 
}

export default function Chart(){
  return(
    <View>
        <Text style={{fontSize: 12, 
            color: "#6c757d", 
            paddingHorizontal: 18,
            fontFamily: "VarelaRound_400Regular",
        }}>Saídas</Text>
      <LineChart
        data={line}
        width={170}
        height={200}
        yAxisLabel="R$"
        yAxisInterval={1}
        chartConfig={{
          backgroundColor: 'fff',
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          fillShadowGradient: "#ffadad",
          propsForBackgroundLines: {strokeWidth: 0},
          propsForLabels: {fontSize: 10},
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 173, 173, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(108, 117, 125, ${opacity})`,
          style:{
            borderRadius: 16
          }
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
          marginLeft: 18,
        }}
      />
    </View>
  );
}