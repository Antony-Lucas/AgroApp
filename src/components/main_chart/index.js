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
            paddingHorizontal: 5,
            fontFamily: "VarelaRound_400Regular",
        }}>Entradas</Text>
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
          fillShadowGradient: "#bdb2ff",
          propsForBackgroundLines: {strokeWidth: 0},
          propsForLabels: {fontSize: 10},
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(189, 178, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(108, 117, 125, ${opacity})`,
          style:{
            borderRadius: 16
          }
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
}