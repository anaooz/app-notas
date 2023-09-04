import { createStackNavigator } from '@react-navigation/stack';
import NovaNota from './src/screens/NovaNota'
import Home from './src/screens/Home'
import { NavigationContainer } from '@react-navigation/native';

const RootStack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Group>
          <RootStack.Screen name="Home" component={Home}/>
        </RootStack.Group>
        <RootStack.Group screenOptions={{ presentation: 'modal' }}>
          <RootStack.Screen name="Modal" component={NovaNota}/>
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  )
}
