import * as React from "react"
import Auth from "./src/screens/Auth"
import Home from "./src/screens/Home"
import Title from "./src/components/Title"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
export default function Main() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Authentication"
          component={Auth}
          options={{ headerTitle: (props) => <Title /> }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerTitle: (props) => <Title /> }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
