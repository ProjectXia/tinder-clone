import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./StackNavigator";
import { AuthProvider } from "./hooks/useAuth";

export default function App() {
  return (
    <NavigationContainer>
      {/* HOC - Higher order component */}
      <AuthProvider>
        {/* Passes down the cool auth stuff to children... */}
        <StackNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
}
