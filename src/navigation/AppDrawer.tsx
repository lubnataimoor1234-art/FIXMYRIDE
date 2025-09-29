// navigation/AppDrawer.tsx
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

const AppDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
};

export default AppDrawer;
