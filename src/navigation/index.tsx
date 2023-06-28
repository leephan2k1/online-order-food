import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { SCREENS } from '~/common/constants';
import HomeScreen from '~/screens/HomeScreen';
import RestaurantScreen from '~/screens/RestaurantScreen';
import CartScreen from '~/screens/CartScreen';

const Stack = createNativeStackNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={SCREENS.Home} component={HomeScreen} />
        <Stack.Screen name={SCREENS.Restaurant} component={RestaurantScreen} />
        <Stack.Screen
          name={SCREENS.Cart}
          options={{ presentation: 'modal' }}
          component={CartScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
