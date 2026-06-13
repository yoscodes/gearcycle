import "./global.css";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GearProvider } from "./context/GearContext";
import DashboardScreen from "./screens/DashboardScreen";
import AddItemScreen from "./screens/AddItemScreen";
import { RootStackParamList } from "./types/navigation";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <GearProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false, animation: "slide_from_right" }}>
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
          <Stack.Screen name="AddItem" component={AddItemScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GearProvider>
  );
}
