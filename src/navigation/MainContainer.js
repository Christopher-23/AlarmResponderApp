/* eslint-disable prettier/prettier */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/HomeScreen';
import NotificationScreen from './screens/NotificationScreen';
import ReportsScreen from './screens/ReportsScreen';

//Screen names
const homeName = 'Home';
const notificationName = 'Notifications';
const reportsName = 'Reports';

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({route}) => ({
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn === notificationName) {
              iconName = focused ? 'notifications' : 'notifications-outline';
            } else if (rn === reportsName) {
              iconName = focused ? 'newspaper' : 'newspaper-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        screensOptions={{
          tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'grey',
        tabBarLabelStyle: {
          paddingBottom: 10,
          fontSize: 10,
        },
        tabBarStyle: [
          {
            display: 'flex',
          },
          null,
        ],
        }}
        >
        <Tab.Screen name={homeName} component={HomeScreen} />
        { <Tab.Screen name={notificationName} component={NotificationScreen} /> }
        <Tab.Screen name={reportsName} component={ReportsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
