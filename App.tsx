/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Inicio from "./views/Inicio"; 
import Detalle from "./views/Detalle"; 

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Inicio" component={Inicio} /> 
          <Stack.Screen name="Detalle" component={Detalle} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;

