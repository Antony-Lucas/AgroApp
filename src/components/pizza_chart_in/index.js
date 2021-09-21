import React from "react";
import{
    Text,
    View,
    Dimensions
}from 'react-native';
import {
     LineChart,
     BarChart,
     PieChart,
     ProgressChart,
     ContributionGraph,
     StackedBarChart
} from "react-native-chart-kit";
import { color } from "react-native-reanimated";

const data = [
      {
        name: "Leite",
        Quantidade: 100,
        color: "#fffffc",
        legendFontColor: "#7F7F7F",
        legendFontSize: 10,
      },
      {
        name: "Carne",
        Quantidade: 180,
        color: "#ffadad",
        legendFontColor: "#7F7F7F",
        legendFontSize: 10,
      },
      {
        name: "Pimenta",
        Quantidade: 250,
        color: "#81b29a",
        legendFontColor: "#7F7F7F",
        legendFontSize: 10,
      },
      {
        name: "Produtos",
        Quantidade: 120,
        color: "#ffd6a5",
        legendFontColor: "#7F7F7F",
        legendFontSize: 10,
      },
]

export default function PizzaChartIn(){
    return(
        <View>
            <Text style={{
            fontSize: 12, 
            color: "#6c757d", 
            fontFamily: "VarelaRound_400Regular",
            marginTop: 0,
            marginLeft: 130,
            }}
            >Minha produção</Text>
            <PieChart
                data={data}
                width={320}
                height={150}
                chartConfig={{
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    }}
                    bezier
                    style={{
                      borderRadius: 16,
                      marginHorizontal: 25,
                    }}
                accessor={"Quantidade"}
                backgroundColor={"transparent"}
                paddingLeft={"0"}
                center={[15, 10]}
                absolute={false}
            />
        </View>
    )
}