
// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Image } from "react-native";
// import Home from "../screens/Home/Home";
// import Profile from "../screens/Profile/Profile";


// import { HomeTab } from "../assets/pngs";
// import Ionicons from "react-native-vector-icons/Ionicons";

// type MainTabsParamList = {
//   Home: undefined;
//   Rides: undefined;
//   Wallet: undefined;
//   Profile: undefined;
// };

// const Tab = createBottomTabNavigator<MainTabsParamList>();

// const MainTabs = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarActiveTintColor: "tomato",
//         tabBarInactiveTintColor: "gray",
//       }}
//     >
//       {/* Home */}
//       <Tab.Screen
//         name="Home"
//         component={Home}
//         options={{
//           tabBarLabel: "Home",
//           tabBarIcon: ({ focused, color, size }) => (
//             <Image
//               source={HomeTab}
//               style={{
//                 width: size,
//                 height: size,
//                 tintColor: color,
//               }}
//               resizeMode="contain"
//             />
//           ),
//         }}
//       />

//       {/* Rides */}
//       <Tab.Screen
//         name="Rides"
//         component={Home} // replace with Rides screen later
//         options={{
//           tabBarLabel: "🚗 Rides",
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="car-outline" size={size} color={color} />
//           ),
//         }}
//       />

//       {/* Wallet */}
//       <Tab.Screen
//         name="Wallet"
//         component={Home} // replace with Wallet screen later
//         options={{
//           tabBarLabel: "Wallet",
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="wallet-outline" size={size} color={color} />
//           ),
//         }}
//       />

//       {/* Profile */}
//       <Tab.Screen
//         name="Profile"
//         component={Profile}
//         options={{
//           tabBarLabel: "Profile",
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="person-outline" size={size} color={color} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// export default MainTabs;

// import React from "react";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { NavigationContainer } from "@react-navigation/native";
// import MainTabs from "./Main.tabs";
// import CustomDrawer from "../components/CustomDrawer";
// import Colors from "../utils/colors.utils";

// const Drawer = createDrawerNavigator();

// const MainNavigation = () => {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator
//         drawerContent={(props) => <CustomDrawer {...props} />}
//         screenOptions={{
//           headerShown: false,
//           drawerActiveTintColor: Colors.PRIMARY,
//           drawerInactiveTintColor: Colors.DARK_GRAY,
//         }}
//       >
//         <Drawer.Screen name="MainTabs" component={MainTabs} options={{ title: "Home" }} />
//         {/* Agar aur screens drawer ke andar chahiye to yaha add karo */}
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// };

// export default MainNavigation;
// src/navigation/Main.drawer.tsx
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainTabs from "./Main.navigation";
import CustomDrawer from "../components/CustomDrawer";

export type DrawerParamList = {
  MainTabs: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

const MainDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="MainTabs" component={MainTabs} />
    </Drawer.Navigator>
  );
};

export default MainDrawer;
