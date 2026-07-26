import "./global.css";
import { Platform, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GearProvider } from "./context/GearContext";
import DashboardScreen from "./screens/DashboardScreen";
import AddItemScreen from "./screens/AddItemScreen";
import SettingsScreen from "./screens/SettingsScreen";
import { RootStackParamList } from "./types/navigation";
import { initializePurchases } from "./utils/purchases";

initializePurchases();

const Stack = createNativeStackNavigator<RootStackParamList>();

const isWeb = Platform.OS === "web";

export default function App() {
  return (
    <View
      style={
        isWeb
          ? { flex: 1, backgroundColor: "#E2E8F0", alignItems: "center" }
          : { flex: 1 }
      }
    >
      <GestureHandlerRootView
        style={
          isWeb
            ? { flex: 1, width: "100%", maxWidth: 480, backgroundColor: "#F8FAFC" }
            : { flex: 1 }
        }
      >
        <GearProvider>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
                animation: isWeb ? "none" : "slide_from_right",
              }}
            >
              <Stack.Screen name="Dashboard" component={DashboardScreen} />
              <Stack.Screen name="AddItem" component={AddItemScreen} />
              <Stack.Screen name="Settings" component={SettingsScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </GearProvider>
      </GestureHandlerRootView>
    </View>
  );
}
