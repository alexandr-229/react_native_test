import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { WeatherCalendar } from "../screens/WeatherCalendar";
import { WeatherList } from "../screens/WeatherList";

import { Screens } from "../constants/Screens";
import { FontAwesome } from "@expo/vector-icons";
import { ITabBarIconProps } from "../types";
import GlobalStyle from "../styles";

const BottomTab = createBottomTabNavigator();

const TabBarIcon = (props: ITabBarIconProps) => {
	return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
};

const Navigation = () => {
	return (
		<NavigationContainer>
			<BottomTab.Navigator
				screenOptions={{
					headerStyle: GlobalStyle.header,
					headerTitleStyle: GlobalStyle.headerTitle
				}}>
				<BottomTab.Screen
					name={Screens.WEATHER_CALENDAR}
					component={WeatherCalendar}
					options={{
						tabBarLabel: "Calendar",
						tabBarIcon: ({ color }) => (
							<TabBarIcon name="calendar" color={color} />
						),
						headerTitle: "Calendar"
					}}
				/>
				<BottomTab.Screen
					name={Screens.WEATHER_LIST}
					component={WeatherList}
					options={{
						tabBarLabel: "List",
						tabBarIcon: ({ color }) => <TabBarIcon name="list" color={color} />,
						headerTitle: "List"
					}}
				/>
			</BottomTab.Navigator>
		</NavigationContainer>
	);
};

export default Navigation;
