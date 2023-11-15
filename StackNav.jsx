/** @format */

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Home from "./screens/Home";
import Tickets from "./screens/Tickets";
import Notifications from "./screens/Notifications";
import Account from "./screens/Account";

const Tab = createBottomTabNavigator();

export default function StackNav() {
	return (
		<>
			<Tab.Navigator>
				<Tab.Screen
					name="Home"
					component={Home}
					options={{
						headerShown: false,
						tabBarIcon: ({ focused }) =>
							focused ? (
								<Entypo name="home" size={24} color="#0101C1" />
							) : (
								<AntDesign name="home" size={24} color="black" />
							)
					}}
				/>

				<Tab.Screen
					name="Tickets"
					component={Tickets}
					options={{
						headerShown: true,
						tabBarIcon: ({ focused }) =>
							focused ? (
								<Ionicons name="receipt-sharp" size={24} color="#0101C1" />
							) : (
								<Ionicons name="receipt-outline" size={24} color="black" />
							)
					}}
				/>

				<Tab.Screen
					name="Notifications"
					component={Notifications}
					options={{
						headerShown: true,
						tabBarIcon: ({ focused }) =>
							focused ? (
								<Ionicons
									name="notifications-sharp"
									size={24}
									color="#0101C1"
								/>
							) : (
								<Ionicons
									name="notifications-outline"
									size={24}
									color="black"
								/>
							)
					}}
				/>

				<Tab.Screen
					name="Account"
					component={Account}
					options={{
						headerShown: true,
						tabBarIcon: ({ focused }) =>
							focused ? (
								<MaterialCommunityIcons
									name="account-circle"
									size={24}
									color="#0101C1"
								/>
							) : (
								<MaterialCommunityIcons
									name="account-circle-outline"
									size={24}
									color="black"
								/>
							)
					}}
				/>
			</Tab.Navigator>
		</>
	);
}
