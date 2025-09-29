import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import Colors from '../utils/colors.utils';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { DrawerContentComponentProps } from '@react-navigation/drawer';

const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <View style={styles.container}>
      {/* Profile Header */}
      <View style={styles.profileContainer}>
        <Image
          source={require('../assets/images/avatar.png')} // Replace with your avatar image
          style={styles.avatar}
        />
        <View style={{ flex: 1 }}>
          <Text style={styles.name}>lubna</Text>
          <Text style={styles.rating}>⭐ 4.8</Text>
        </View>
        <Icon name="chevron-forward" size={20} color={Colors.TEXT} />
      </View>

      {/* Menu Items */}
      <ScrollView style={{ flex: 1 }}>
        {[
          { icon: 'car-outline', label: 'City' },
          { icon: 'time-outline', label: 'Request history' },
          { icon: 'cube-outline', label: 'Couriers' },
          { icon: 'briefcase-outline', label: 'Business delivery' },
          { icon: 'globe-outline', label: 'City to City' },
          { icon: 'cube-outline', label: 'Freight' },
          { icon: 'notifications-outline', label: 'Notifications' },
          { icon: 'shield-checkmark-outline', label: 'Safety' },
          { icon: 'settings-outline', label: 'Settings' },
        ].map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem}>
            <Icon name={item.icon} size={22} color={Colors.DARK_GRAY} />
            <Text style={styles.menuLabel}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Driver Mode Button */}
      <TouchableOpacity style={styles.driverBtn}>
        <Text style={styles.driverBtnText}>Driver mode</Text>
      </TouchableOpacity>

      {/* Social Icons */}
      <View style={styles.socialIcons}>
        <FontAwesome name="facebook-square" size={30} color="#1877F2" />
        <FontAwesome name="instagram" size={30} color="#C13584" />
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    gap: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.TEXT,
  },
  rating: {
    fontSize: 14,
    color: Colors.DARK_GRAY,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    gap: 15,
  },
  menuLabel: {
    fontSize: 15,
    color: Colors.TEXT,
  },
  driverBtn: {
    backgroundColor: Colors.YELLOW,
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 15,
  },
  driverBtnText: {
    fontWeight: 'bold',
    color: Colors.TEXT,
    fontSize: 16,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 20,
  },
});


// src/components/CustomDrawer.tsx
// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
// import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import Colors from '../utils/colors.utils';

// const CustomDrawer = (props) => {
//   return (
//     <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
//       <View style={styles.header}>
//         <Image
//           source={require('../assets/profile-placeholder.png')}
//           style={styles.avatar}
//         />
//         <View>
//           <Text style={styles.name}>lubna</Text>
//           <Text style={styles.rating}>⭐ 4.8</Text>
//         </View>
//       </View>

//       <View style={styles.list}>
//         <DrawerItemList {...props} />
//       </View>

//       <TouchableOpacity style={styles.driverButton}>
//         <Text style={styles.driverButtonText}>Driver mode</Text>
//       </TouchableOpacity>

//       <View style={styles.socialIcons}>
//         <Ionicons name="logo-facebook" size={24} color="#4267B2" />
//         <Ionicons name="logo-instagram" size={24} color="#E1306C" />
//       </View>
//     </DrawerContentScrollView>
//   );
// };

// export default CustomDrawer;

// const styles = StyleSheet.create({
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 20,
//     backgroundColor: Colors.PRIMARY,
//   },
//   avatar: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginRight: 15,
//   },
//   name: {
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   rating: {
//     color: '#fff',
//   },
//   list: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingTop: 10,
//   },
//   driverButton: {
//     backgroundColor: Colors.WHITE,
//     margin: 15,
//     padding: 12,
//     borderRadius: 10,
//     alignItems: 'center',
//   },
//   driverButtonText: {
//     color: '#000',
//     fontWeight: 'bold',
//   },
//   socialIcons: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     gap: 20,
//     marginBottom: 20,
//   },
// });
