import 'react-native-gesture-handler';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HelloScreen from './screens/HelloScreen';
import MapScreen from './screens/MapScreen/MapScreen';
import LastNameScreen from './screens/LastNameScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import LoginSuccessScreen from './screens/LoginSuccessScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
const DonorDrawer = createDrawerNavigator();

export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="AuthStack" component={AuthStackNavigator} options={{ headerShown: false }} />
          <Stack.Screen name="DonorDrawer" component={DonorDrawerNavigator} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

function AuthStackNavigator() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
      <AuthStack.Screen name="LastName" component={LastNameScreen} />
      <AuthStack.Screen name="Hello" component={HelloScreen} />
    </AuthStack.Navigator>
  )
};

function DonorDrawerNavigator() {
  return (
    <DonorDrawer.Navigator>
      <DonorDrawer.Screen name="LoginSuccess" component={LoginSuccessScreen} options={{ headerShown: false }}/>
      <DonorDrawer.Screen name="Map" component={MapScreen} options={{ headerShown: false }}/>
    </DonorDrawer.Navigator>
  )
};
